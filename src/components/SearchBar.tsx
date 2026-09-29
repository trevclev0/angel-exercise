import { useSearchBar } from '../hooks/useSearchBar';
import type { Cat } from '../services/catsQueries';

type SearchBarProps = {
  addCat: (cat: Cat) => void;
};

export function SearchBar({ addCat }: SearchBarProps) {
  const { submitHandler, changeHandler, searchTag, catTags } = useSearchBar(addCat);

  return (
    <div className="mr-auto ml-auto flex max-w-5xl flex-col items-center justify-center rounded-xl border border-[#7A5D58] bg-[#D2AC92]">
      <form className="flex w-full flex-col p-4" onSubmit={submitHandler}>
        <input
          placeholder="Enter cat text"
          onChange={changeHandler}
          name="catText"
          className="m-1 bg-white px-3 opacity-75 hover:opacity-100"
        />
        <select
          value={searchTag}
          name="searchTag"
          className="m-1 cursor-pointer bg-white px-3 opacity-75 hover:opacity-100"
          onChange={changeHandler}
        >
          <option value="" disabled defaultValue="">
            Select a tag
          </option>
          {catTags.map((catTag) => (
            <option key={catTag} value={catTag}>
              {catTag}
            </option>
          ))}
        </select>
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
