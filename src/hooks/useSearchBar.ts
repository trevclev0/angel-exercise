import { type ChangeEvent, type SubmitEvent, useState } from 'react';
import { type Cat, fetchCat } from '../services/catsQueries';

export function useSearchBar(addCat: (cat: Cat) => void) {
  const [formData, setFormData] = useState({ catText: '', searchTag: '' });
  const [findingCat, setFindingCat] = useState(false);

  async function submitHandler(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setFindingCat(true);

    try {
      const cat = await fetchCat({ ...formData, timestamp: Date.now() });
      addCat(cat);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error finding a cat: ${error.message}`);
      }
    } finally {
      setFindingCat(false);
    }
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return {
    findingCat,
    submitHandler,
    changeHandler,
    ...formData,
  };
}
