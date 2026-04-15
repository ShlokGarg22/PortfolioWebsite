import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Full-Stack Architect", "AI Innovator", "Cloud Native", "System Designer"];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center overflow-visible text-[6.5vw] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
      <div className="relative h-[1.3em] w-[90vw] md:w-[1000px] overflow-y-hidden overflow-x-visible">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 top-0 block whitespace-nowrap bg-gradient-to-r from-gray-800 to-gray-400 dark:from-gray-200 dark:to-gray-500 bg-clip-text text-transparent"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RotatingText;
