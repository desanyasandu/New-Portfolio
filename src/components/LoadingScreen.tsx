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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Spinning/pulsing graphic logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
                letterSpacing: '-2px',
                background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-primary) 50%, var(--accent-tertiary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))'
              }}
            >
              DY.
            </motion.div>

            {/* Double ring spinner */}
            <div style={{ position: 'relative', width: '48px', height: '48px' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2.5px solid transparent',
                  borderTopColor: 'var(--accent-secondary)',
                  borderRightColor: 'var(--accent-primary)',
                  animation: 'spin 1s linear infinite'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '5px',
                  borderRadius: '50%',
                  border: '2.5px solid transparent',
                  borderBottomColor: 'var(--accent-tertiary)',
                  borderLeftColor: 'var(--accent-secondary)',
                  animation: 'spin 1.5s linear infinite reverse'
                }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3 }}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
