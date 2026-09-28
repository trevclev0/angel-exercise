import { WelcomeBanner } from './components/WelcomeBanner';

function App() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-200 dark:bg-gray-900">
      <div className="p-4">
        <WelcomeBanner />
      </div>
    </div>
  );
}

export default App;
