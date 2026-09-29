import { useIsMutating } from '@tanstack/react-query';
import { findCatMutationKey } from '../hooks/useSearchBarMutation';
import type { Cat } from '../services/catsQueries';
import { CatCard } from './CatCard';
import { LoadingCatCard } from './LoadingCatCard';

type CatsGridProps = {
  cats: Cat[];
};

export function CatsGrid({ cats }: CatsGridProps) {
  const isFindingCat = useIsMutating({ mutationKey: findCatMutationKey }) > 0;

  return (
    <div className="my-5 grid w-full auto-rows-auto grid-cols-1 grid-rows-1 place-items-center gap-4 md:grid-cols-3">
      {cats.map((cat: Cat) => (
        <CatCard key={cat.queryDate} id={cat.id} url={cat.url} />
      ))}
      {isFindingCat && <LoadingCatCard />}
    </div>
  );
}
