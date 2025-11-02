import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Navigation from './components/Navigation';
import Ambience from './components/Ambience';

function App() {
  const [started, setStarted] = useState(false);
  const [landing, setLanding] = useState(false);
  const sectionsRef = useRef(null);

  const handleStart = () => {
    // Trigger landing animation, then reveal sections
    setLanding(true);
    setStarted(true);
    setTimeout(() => {
      sectionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setLanding(false);
    }, 1500);
  };

  // Smooth background parallax for entire page
  useEffect(() => {
    const root = document.documentElement;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty('--parallaxX', `${x}`);
      root.style.setProperty('--parallaxY', `${y}`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black">
      <Hero onStart={handleStart} />

      {/* Landing transition overlay */}
      <AnimatePresence>
        {landing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none fixed inset-0 z-40"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/60 to-black" />
            <motion.div
              initial={{ y: '-60%' }}
              animate={{ y: '0%' }}
              exit={{ y: '60%' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sections */}
      <div ref={sectionsRef}>
        <Sections />
      </div>

      {/* Navigation portals */}
      {started && <Navigation />}

      {/* Ambient audio */}
      <Ambience active={started} />
    </div>
  );
}

export default App;
