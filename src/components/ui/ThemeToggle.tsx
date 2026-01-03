import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
}

export function ThemeToggle({ isDarkMode, toggleDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => toggleDarkMode(!isDarkMode)}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/20"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 0 : 1,
          opacity: isDarkMode ? 0 : 1,
          rotate: isDarkMode ? 90 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 1 : 0,
          opacity: isDarkMode ? 1 : 0,
          rotate: isDarkMode ? 0 : -90,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon size={20} />
      </motion.div>
    </button>
  );
}
