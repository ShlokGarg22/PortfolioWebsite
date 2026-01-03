import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skill', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const PillNav = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 z-40 -translate-x-1/2 hidden md:block"
    >
      <div className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-2 py-2 shadow-lg backdrop-blur-xl transition-all hover:scale-[1.02]">
        {/* Logo Section */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
           <span className="font-bold text-sm">SG</span>
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-1 pl-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 transition-all hover:text-black",
                "hover:bg-gray-200 hover:ring-1 hover:ring-gray-300"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default PillNav;
