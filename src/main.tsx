import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const documentRoot = document.getElementById('root');
if (!documentRoot) {
  throw new Error('Unable to mount App to page. Document root does not exist');
}

createRoot(documentRoot).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
