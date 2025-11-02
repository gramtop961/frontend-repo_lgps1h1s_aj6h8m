import { motion } from 'framer-motion';
import { User, Settings, Laptop, Mail } from 'lucide-react';

const items = [
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Settings },
  { id: 'projects', label: 'Projects', icon: Laptop },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navigation() {
  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-30 mx-auto flex w-full max-w-xl items-center justify-center gap-4 px-4">
      {items.map(({ id, label, icon: Icon }) => (
        <motion.button
          key={id}
          onClick={() => handleNav(id)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex-1 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-md"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-fuchsia-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative z-10 flex items-center justify-center gap-2">
            <Icon className="h-4 w-4 text-sky-300" />
            <span>{label}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
