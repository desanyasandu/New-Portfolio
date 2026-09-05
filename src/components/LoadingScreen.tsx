import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for window loading or simple timeout to ensure assets are rendered
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case load event doesn't fire
      const timeout = setTimeout(handleLoad, 2000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="loading-screen"
        >
          <div className="loader" style={{ position: 'relative' }}>
            <div 
              className="ambient-glow"
              style={{
                position: 'absolute',
                width: '180px',
                height: '180px',
                background: 'rgba(99, 102, 241, 0.15)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                pointerEvents: 'none',
                zIndex: -1
              }}
            />
            <div className="loading-text" style={{ letterSpacing: '2px' }}>
              DY<span className="dot text-gradient">.</span><span className="dot text-gradient">.</span><span className="dot text-gradient">.</span>
            </div>
            <div className="loading-bar-background">
              <div className="loading-bar">
                <div className="white-bars-container">
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                  <div className="white-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
