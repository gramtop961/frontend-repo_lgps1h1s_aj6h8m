import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onStart }) {
  const containerRef = useRef(null);

  // Subtle parallax based on mouse
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 6; // tilt range
      const y = (e.clientY / h - 0.5) * -6;
      el.style.setProperty('--tiltX', `${y}deg`);
      el.style.setProperty('--tiltY', `${x}deg`);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20 blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center"
        style={{ transform: 'perspective(1000px) rotateX(var(--tiltX, 0)) rotateY(var(--tiltY, 0))' }}
      >
        {/* Hologram frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mb-8"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-cyan-400/40 bg-white/5 shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)]">
            {/* Replace src with a real photo URL if available */}
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=Mohamed%20Hajbi&backgroundType=gradientLinear&fontFamily=Verdana&fontWeight=700&radius=25"
              alt="Mohamed Hajbi"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/40" />
            <div className="pointer-events-none absolute inset-0 animate-pulse bg-cyan-400/5 mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 -z-[0] animate-ping rounded-3xl bg-cyan-500/10 blur-2xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-3 bg-gradient-to-r from-sky-300 via-indigo-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          Mohamed Hajbi – Software Engineer | Full Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mb-8 text-sm text-slate-300 sm:text-base"
        >
          Python | FastAPI | PostgreSQL | PostGIS | API Design & Automation
        </motion.p>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-600 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-700/20 focus:outline-none"
        >
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          <Rocket className="h-5 w-5" />
          <span>Start Journey</span>
        </motion.button>

        {/* Watermark */}
        <div className="pointer-events-none absolute right-4 top-4 z-10 select-none text-right text-xs font-medium text-sky-200/60">
          <div className="animate-pulse">Mohamed Hajbi</div>
        </div>
      </div>
    </section>
  );
}
