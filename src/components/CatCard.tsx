import type { Cat } from '../services/catsQueries';

export function CatCard({ id, url }: Cat) {
  return (
    <div className="aspect-square overflow-hidden rounded-xl bg-[#EF5A50] opacity-100 starting:opacity-0 transition-opacity duration-2000">
      <img src={url} alt={`Cat ${id}`} className="h-full w-full object-contain" />
    </div>
  );
}
