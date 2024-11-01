import { StrictMode, useEffect, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import LoadingSpinner from './components/ui/LoadingSpinner';
const App = lazy(() => import('./App'));
import './index.css';

// Preload critical images
const CRITICAL_IMAGES = [
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
  'https://images.unsplash.com/photo-1617897903246-719242758050',
  'https://images.unsplash.com/photo-1612344441107-ef12287e4872'
].map(url => `${url}?auto=format&fit=crop&q=80&w=800`);

const PreloadImages = () => {
  useEffect(() => {
    const imagePromises = CRITICAL_IMAGES.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises).catch(console.error);
  }, []);
  return null;
};

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <PreloadImages />
      <App />
    </Suspense>
  </StrictMode>
);

// Enable hot module replacement in development
if (import.meta.hot) {
  import.meta.hot.accept();
}