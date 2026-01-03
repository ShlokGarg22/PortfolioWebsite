import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const dockItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: FolderGit2, label: 'Projects', href: '#projects' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

function DockIcon({ mouseX, children, href }: { mouseX: MotionValue; children: React.ReactNode; href: string }) {
  const ref = React.useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-200/80 dark:bg-white/10 flex items-center justify-center shadow-sm backdrop-blur-md border border-white/20 dark:border-white/5"
    >
      <a href={href} className="flex h-full w-full items-center justify-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
        {children}
      </a>
    </motion.div>
  );
}

const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 flex h-16 items-end gap-4 rounded-2xl border border-white/20 bg-white/70 dark:bg-black/70 dark:border-white/10 px-4 pb-3 shadow-2xl backdrop-blur-xl md:hidden"
    >
      {dockItems.map((item) => (
        <DockIcon key={item.label} mouseX={mouseX} href={item.href}>
          <item.icon size={20} />
        </DockIcon>
      ))}
    </motion.div>
  );
};

export default Dock;
