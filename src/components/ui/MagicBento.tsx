import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Code2, Database, Brain, Cloud } from 'lucide-react';

const BentoCard = ({ children, className, title, icon: Icon }: { children: React.ReactNode; className?: string; title: string; icon: any }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={cn(
      "group relative overflow-hidden rounded-3xl bg-apple-gray p-6 transition-all hover:shadow-xl dark:bg-white/10 border border-gray-200",
      className
    )}
  >
    <div className="absolute right-4 top-4 opacity-20 transition-opacity group-hover:opacity-40">
      <Icon size={80} />
    </div>
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div className="rounded-full bg-white/50 p-3 w-fit backdrop-blur-sm">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-2 text-sm opacity-60">{children}</div>
      </div>
    </div>
  </motion.div>
);

const MagicBento = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-full min-h-[600px] w-full max-w-6xl mx-auto p-4">
      <BentoCard title="Full Stack" icon={Code2} className="md:col-span-2 md:row-span-1 bg-blue-50 hover:bg-blue-100">
        React, Next.js, Node.js, TypeScript, Tailwind CSS. Building scalable, high-performance applications.
      </BentoCard>
      <BentoCard title="AI Architect" icon={Brain} className="md:col-span-1 md:row-span-2 bg-purple-900 text-white hover:bg-purple-800">
        <span className="text-purple-100">
          Python, TensorFlow, PyTorch, OpenAI API, LangChain. Bridging the gap between traditional software and AI.
        </span>
      </BentoCard>
      <BentoCard title="Cloud Native" icon={Cloud} className="md:col-span-1 md:row-span-1 bg-sky-900 text-white hover:bg-sky-800">
        <span className="text-sky-100">
          AWS, Docker, Kubernetes, Terraform, CI/CD.
        </span>
      </BentoCard>
      <BentoCard title="System Design" icon={Database} className="md:col-span-1 md:row-span-1 bg-orange-50 hover:bg-orange-100">
        Microservices, Event-driven, Redis, PostgreSQL, MongoDB.
      </BentoCard>
    </div>
  );
};

export default MagicBento;
