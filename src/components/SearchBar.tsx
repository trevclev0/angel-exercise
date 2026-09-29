import { useSearchBar } from '../hooks/useSearchBar';
import type { Cat } from '../services/catsQueries';
import { CatTagSelector } from './CatTagSelector';

type SearchBarProps = {
  addCat: (cat: Cat) => void;
};

export function SearchBar({ addCat }: SearchBarProps) {
  const { changeHandler, submitHandler, catText, searchTag, isPending, error } =
    useSearchBar(addCat);

  return (
    <div className="mr-auto ml-auto flex max-w-5xl flex-col items-center justify-center rounded-xl border border-[#7A5D58] bg-[#D2AC92]">
      <form className="flex w-full flex-col p-4" onSubmit={submitHandler}>
        <input
          placeholder="Enter cat text"
          onChange={changeHandler}
          value={catText}
          name="catText"
          className="m-1 rounded bg-white px-3 opacity-75 hover:opacity-100 hover:ring-offset-4"
        />
        <CatTagSelector searchTag={searchTag} changeHandler={changeHandler} />
        <button
          type="submit"
          disabled={isPending}
          className="mt-2 mr-auto ml-auto w-auto cursor-pointer rounded-sm bg-[#7A5D58] px-6 py-2 text-white opacity-85 shadow-2xl hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
        >
          Find a Cat
        </button>
        {error && <p className="mt-2 text-red-600">{error.message}</p>}
      </form>
    </div>
  );
}
