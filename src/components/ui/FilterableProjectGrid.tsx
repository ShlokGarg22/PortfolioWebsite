import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Brain, Cloud } from 'lucide-react';
import { cn } from '../../lib/utils';

type Category = 'All' | 'Full Stack' | 'AI/ML' | 'Cloud';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string; // Optional: if you want to add images later
}

const projects: Project[] = [
  {
    id: 1,
    title: "BrandGuardian",
    description: "An AI-powered Compliance QA Pipeline and Brand Guidelines platform.",
    category: "AI/ML",
    tech: ["Python", "JavaScript", "React", "LLMs"],
    github: "https://github.com/ShlokGarg22/Brand-Guidelines"
  },
  {
    id: 2,
    title: "DataMind (MergeAI)",
    description: "Natural language SQL query tool with AI-powered data analysis and visualization.",
    category: "AI/ML",
    tech: ["FastAPI", "React", "LangGraph", "PostgreSQL"],
    github: "https://github.com/ShlokGarg22/MergeAI"
  },
  {
    id: 3,
    title: "GameForge AI",
    description: "A multi-agent platform using LangGraph to generate playable browser games from text prompts.",
    category: "AI/ML",
    tech: ["LangGraph", "Python", "CrewAI", "LLMs"],
    github: "https://github.com/ShlokGarg22/GameForge-AI"
  },
  {
    id: 4,
    title: "Echo",
    description: "Enterprise-level monorepo for reactive chat & knowledge management using Convex and Pinecone.",
    category: "Full Stack",
    tech: ["Next.js", "TypeScript", "Convex", "Pinecone"],
    github: "https://github.com/ShlokGarg22/Echo"
  },
  {
    id: 5,
    title: "NetWizard",
    description: "A cross-platform network diagnostic CLI tool with a custom theme system.",
    category: "Cloud",
    tech: ["Python", "Networking", "CLI", "System Architecture"],
    github: "https://github.com/ShlokGarg22/NetWizard"
  },
  {
    id: 6,
    title: "MoviePop AI",
    description: "Movie recommender utilizing Gemini Embeddings and Supabase for semantic search.",
    category: "AI/ML",
    tech: ["Gemini Embeddings", "Supabase", "Vector DB", "React"],
    github: "https://github.com/ShlokGarg22/MoviePop-AI"
  },
  {
    id: 7,
    title: "Second Brain Frontend",
    description: "A modern frontend application for a personal knowledge base and knowledge management.",
    category: "Full Stack",
    tech: ["TypeScript", "React", "State Management", "Vite"],
    github: "https://github.com/ShlokGarg22/second_brain_frontend"
  },
  {
    id: 8,
    title: "Flexi DBMS Project",
    description: "A comprehensive Database Management System project built to demonstrate core database principles.",
    category: "Full Stack",
    tech: ["Java", "SQL", "Database Design", "JDBC"],
    github: "https://github.com/ShlokGarg22/Flexi_DBMS_Project"
  }
];

const categories: Category[] = ['All', 'Full Stack', 'AI/ML', 'Cloud'];

const FilterableProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
              activeCategory === category
                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white scale-105"
                : "bg-white/50 text-gray-600 border-gray-200 hover:bg-white hover:border-gray-300 dark:bg-white/5 dark:text-gray-400 dark:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-white/5 dark:border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-full bg-gray-50 dark:bg-white/10">
                    {project.category === 'Full Stack' && <Code2 size={20} className="text-blue-500" />}
                    {project.category === 'AI/ML' && <Brain size={20} className="text-purple-500" />}
                    {project.category === 'Cloud' && <Cloud size={20} className="text-sky-500" />}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FilterableProjectGrid;
