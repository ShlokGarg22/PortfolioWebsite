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
    <div className="flex flex-col items-start justify-center overflow-hidden text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
      <div className="relative h-[1.2em] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 top-0 block bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RotatingText;
