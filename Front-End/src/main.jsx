import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Add preloading hints for critical resources
if (typeof window !== 'undefined') {
  // Preload critical fonts
  const fontPreloadLinks = [
    { href: '/src/fonts/Gilroy-Regular.ttf', type: 'font/ttf' },
    { href: '/src/fonts/Gilroy-Medium.ttf', type: 'font/ttf' },
    { href: '/src/fonts/Gilroy-Bold.ttf', type: 'font/ttf' }
  ];

  fontPreloadLinks.forEach(({ href, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = href;
    link.type = type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// More reliable way to grab the root element with error handling
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Create root with better error boundary
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
