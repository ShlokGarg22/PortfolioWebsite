import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "SecondBrain",
    category: "System Architecture",
    description: "A comprehensive knowledge management system leveraging AI for semantic search and automated organization.",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Wave_game",
    category: "Interactive Experience",
    description: "A browser-based rhythm game featuring real-time audio analysis and procedural visual generation.",
    color: "from-purple-400 to-pink-600",
  },
  {
    id: 3,
    title: "Dev_N0tes",
    category: "Community Platform",
    description: "A collaborative platform for developers to share snippets, architectural patterns, and debugging stories.",
    color: "from-orange-400 to-red-600",
  },
];

const Card = ({ project, index, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex flex-col h-auto md:h-[500px] w-[90%] md:w-[1000px] rounded-[30px] bg-white shadow-2xl overflow-hidden border border-gray-200 origin-top dark:bg-gray-900 dark:border-gray-800"
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-between bg-gray-50 dark:bg-white/5 order-2 md:order-1 gap-6 md:gap-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 dark:text-white">{project.title}</h2>
              <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">{project.category}</span>
              <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed dark:text-gray-300">{project.description}</p>
            </div>
            <button className="w-fit rounded-full bg-black px-6 py-3 text-sm md:text-base text-white transition-transform hover:scale-105 dark:bg-white dark:text-black">
              View Case Study
            </button>
          </div>
          <div className={`w-full md:w-[60%] h-[200px] md:h-full bg-gradient-to-br ${project.color} relative overflow-hidden order-1 md:order-2`}>
            <motion.div style={{ scale: imageScale }} className="h-full w-full flex items-center justify-center">
               {/* Placeholder for project image */}
               <span className="text-white/20 text-6xl md:text-9xl font-bold tracking-tighter">
                 {project.title[0]}
               </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ScrollStack = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} className="relative mt-[20vh]">
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return (
          <Card 
            key={i} 
            project={project} 
            index={i} 
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default ScrollStack;
