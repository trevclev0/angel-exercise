import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';

const documentRoot = document.getElementById('root');
if (!documentRoot) {
  throw new Error('Unable to mount App to page. Document root does not exist');
}

const queryClient = new QueryClient();

createRoot(documentRoot).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
