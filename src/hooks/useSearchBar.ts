import { type ChangeEvent, type SyntheticEvent, useEffect, useState } from 'react';
import { type Cat, fetchCat, fetchCatTags } from '../services/catsQueries';

export function useSearchBar(addCat: (cat: Cat) => void) {
  const [formData, setFormData] = useState({ catText: '', searchTag: '' });
  const [catTags, setCatTags] = useState<string[]>([]);

  async function submitHandler(event: SyntheticEvent) {
    event.preventDefault();

    const cat = await fetchCat(formData);
    addCat(cat);
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    (async () => {
      const fetchedCatTags = await fetchCatTags();

      setCatTags((prevCatTags) => Array.from(new Set([...prevCatTags, ...fetchedCatTags])));
    })();
  }, []);

  return { submitHandler, changeHandler, catTags, searchTag: formData.searchTag };
}
