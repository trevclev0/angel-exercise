import { useState } from 'react';
import { CatsCatalog } from './components/CatsCatalog';
import { HeaderLogo } from './components/HeaderLogo';
import { SearchBar } from './components/SearchBar';
import type { Cat } from './services/catsQueries';

function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const addCat = (cat: Cat) => setCats((currCats) => [...currCats, cat]);

  return (
    <div className="min-h-screen bg-white transition-colors duration-200">
      <div className="p-4">
        <HeaderLogo />
        <main>
          <SearchBar addCat={addCat} />
          <CatsCatalog cats={cats} />
        </main>
      </div>
    </div>
  );
}

export default App;
