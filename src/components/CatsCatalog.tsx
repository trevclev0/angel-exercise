import type { Cat } from '../services/catsQueries';
import { CatsGrid } from './CatsGrid';

type CatsCatalogProps = {
  cats: Cat[];
};

export function CatsCatalog({ cats }: CatsCatalogProps) {
  return (
    cats && (
      <div className="mx-auto max-w-7xl">
        <CatsGrid cats={cats} />
      </div>
    )
  );
}
