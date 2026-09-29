import { type ChangeEvent, type SubmitEvent, useState } from 'react';
import { type Cat, fetchCat } from '../services/catsQueries';
import { CatTagSelector } from './CatTagSelector';

type SearchBarProps = {
  addCat: (cat: Cat) => void;
};

export function SearchBar({ addCat }: SearchBarProps) {
  const [formData, setFormData] = useState({ catText: '', searchTag: '' });

  async function submitHandler(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const cat = await fetchCat(formData);
    addCat(cat);
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div className="mr-auto ml-auto flex max-w-5xl flex-col items-center justify-center rounded-xl border border-[#7A5D58] bg-[#D2AC92]">
      <form className="flex w-full flex-col p-4" onSubmit={submitHandler}>
        <input
          placeholder="Enter cat text"
          onChange={changeHandler}
          value={formData.catText}
          name="catText"
          className="m-1 bg-white px-3 opacity-75 hover:opacity-100"
        />
        <CatTagSelector searchTag={formData.searchTag} changeHandler={changeHandler} />
        <button
          type="submit"
          className="mt-2 mr-auto ml-auto w-auto cursor-pointer rounded-sm bg-[#7A5D58] px-6 py-2 text-white opacity-85 shadow-2xl hover:opacity-100"
        >
          Find a Cat
        </button>
      </form>
    </div>
  );
}
