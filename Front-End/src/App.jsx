import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './MyComponents/loader/Loader';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Add mounted state for client-side animation
    setMounted(true);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-transparent" // Changed from bg-gradient-to-b from-white to-gray-50
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
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;