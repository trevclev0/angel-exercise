import type { Cat } from '../services/catsQueries';

export function CatCard({ id, url }: Cat) {
  return (
    <div className="aspect-square overflow-hidden rounded-xl bg-[#EF5A50]">
      <img src={url} alt={`Cat ${id}`} className="h-full w-full object-contain" />
    </div>
  );
}
