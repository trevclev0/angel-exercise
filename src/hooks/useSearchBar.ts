import { type ChangeEvent, type SubmitEvent, useState } from 'react';
import { type Cat, fetchCat } from '../services/catsQueries';

export function useSearchBar(addCat: (cat: Cat) => void) {
  const [formData, setFormData] = useState({ catText: '', searchTag: '' });

  async function submitHandler(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const cat = await fetchCat(formData);
    addCat(cat);
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return { submitHandler, changeHandler, catText: formData.catText, searchTag: formData.searchTag };
}
