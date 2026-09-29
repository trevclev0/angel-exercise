import { useState } from 'react';
import { CatCard } from './components/CatCard';
import { CatsCatalog } from './components/CatsCatalog';
import { HeaderLogo } from './components/HeaderLogo';
import { SearchBar } from './components/SearchBar';
import { useHash } from './hooks/useHash';
import type { Cat } from './services/catsQueries';

function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const addCat = (cat: Cat) => setCats((currCats) => [...currCats, cat]);
  const id = useHash();

  return (
    <div className="min-h-screen bg-white transition-colors duration-200">
      <div className="p-4">
        <HeaderLogo />
        <main>
          {id ? (
            <div className="mr-auto ml-auto max-w-200">
              <CatCard id={id} url={`https://cataas.com/cat/${id}`} />
            </div>
          ) : (
            <>
              <SearchBar addCat={addCat} />
              <CatsCatalog cats={cats} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
