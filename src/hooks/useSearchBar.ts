import { type ChangeEvent, type SubmitEvent, useState } from 'react';
import type { Cat } from '../services/catsQueries';
import { useSearchBarMutation } from './useSearchBarMutation';

export function useSearchBar(addCat: (cat: Cat) => void) {
  const [formData, setFormData] = useState({ catText: '', searchTag: '' });
  const mutation = useSearchBarMutation(addCat);

  function submitHandler(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    mutation.mutate(formData);
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return {
    isPending: mutation.isPending,
    error: mutation.error,
    submitHandler,
    changeHandler,
    ...formData,
  };
}
