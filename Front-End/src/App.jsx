import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './MyComponents/loader/Loader';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
     <Toaster position="top-right"
        reverseOrder={false} />
   <Home/>
   </>
  );
}

export default App;