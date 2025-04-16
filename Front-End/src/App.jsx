import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './MyComponents/loader/Loader';

// Lazy load the Home component
const Home = lazy(() => import('./pages/Home'));

function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Add mounted state for client-side animation
    setMounted(true);
    
    // Use requestIdleCallback for non-critical initialization
    // with a fallback for browsers that don't support it
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    
    // Start loading immediately but give a minimum perceived loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Reduced from 2000ms to 1200ms for better UX

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Prevent layout shift by waiting for mount
  if (!mounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Reduced transition time
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // Reduced animation time
            className="bg-transparent"
          >
            <Toaster 
              position="top-right"
              reverseOrder={false} 
              toastOptions={{
                duration: 5000,
                style: {
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500
                },
              }}
            />
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;