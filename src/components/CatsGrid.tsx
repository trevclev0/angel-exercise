import type { Cat } from '../services/catsQueries';
import { CatCard } from './CatCard';

type CatsGridProps = {
  cats: Cat[];
};

export function CatsGrid({ cats }: CatsGridProps) {
  return (
    <div className="my-5 grid w-full auto-rows-auto grid-cols-1 grid-rows-1 place-items-center gap-4 md:grid-cols-3">
      {cats.map((cat: Cat) => (
        <CatCard key={cat.id} id={cat.id} url={cat.url} />
      ))}
    </div>
  );
}
