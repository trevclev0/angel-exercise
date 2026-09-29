import { useState } from 'react';
import { CatDetail } from './components/CatDetail';
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
            <CatDetail id={id} />
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
