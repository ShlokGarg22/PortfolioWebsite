import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Home, User, Code2, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Skill', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Code2 },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const PillNav = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-1/2 z-40 -translate-x-1/2 hidden md:block"
      >
        <div className="flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-2 py-2 shadow-lg backdrop-blur-xl transition-all hover:scale-[1.02] dark:bg-black/80 dark:border-white/10 dark:text-white">
          {/* Logo Section */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
             <span className="font-bold text-sm">SG</span>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-1 pl-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 transition-all hover:text-black dark:text-gray-300 dark:hover:text-white",
                  "hover:bg-gray-200 hover:ring-1 hover:ring-gray-300 dark:hover:bg-white/10 dark:hover:ring-white/20"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-8 left-4 right-4 z-[5000] md:hidden"
      >
        <div className="grid grid-cols-4 items-center justify-items-center rounded-2xl border border-black/5 bg-white/90 py-4 shadow-2xl backdrop-blur-xl dark:bg-black/90 dark:border-white/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex h-12 w-12 flex-col items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label={item.name}
            >
              <item.icon size={24} strokeWidth={2} />
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default PillNav;
