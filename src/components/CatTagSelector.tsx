import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { ChangeEvent } from 'react';
import { fetchCatTags } from '../services/catsQueries';

type CatTagSelectorProps = {
  searchTag: string;
  changeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export function CatTagSelector({ searchTag, changeHandler }: CatTagSelectorProps) {
  const {
    error,
    isLoading,
    data: catTags,
  } = useQuery({
    queryKey: ['cat', 'tags'],
    queryFn: () => fetchCatTags(),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <p>Loading cat tags...</p>;
  }

  if (error) {
    return <p>CatTagSelector Error: {error.message}</p>;
  }

  return (
    <select
      value={searchTag}
      name="searchTag"
      className="m-1 cursor-pointer rounded bg-white px-3 opacity-75 hover:opacity-100"
      onChange={changeHandler}
    >
      <option value="" disabled defaultValue="">
        Select a tag
      </option>
      {catTags?.map((catTag) => (
        <option key={catTag} value={catTag}>
          {catTag}
        </option>
      ))}
    </select>
  );
}
