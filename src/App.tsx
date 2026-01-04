import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ThemeToggle } from './components/ui/ThemeToggle';
import GradientBackground from './components/ui/GradientBackground';
import LightRays from './components/ui/LightRays';
import ClickSpark from './components/ui/ClickSpark';
import PillNav from './components/ui/PillNav';
import Dock from './components/ui/Dock';
import RotatingText from './components/ui/RotatingText';
import LogoLoop from './components/ui/LogoLoop';
import MagicBento from './components/ui/MagicBento';
import MagicBentoDark from './components/ui/MaginBentoDark';
import ScrollStack from './components/ui/ScrollStack';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-black selection:text-white dark:text-white">
      <div className="fixed inset-0 -z-20 h-full w-full bg-white dark:bg-black transition-colors duration-300" />
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      {isDarkMode ? (
        <div className="fixed inset-0 -z-10 h-full w-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      ) : (
        <GradientBackground />
      )}
      <ClickSpark sparkColor={isDarkMode ? '#ffffff' : '#000000'} />
      
      <PillNav />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section id="home" className="flex min-h-screen w-full flex-col items-center justify-center px-4 pt-28 md:flex-row md:justify-between md:px-20 gap-10">
          <div className="flex flex-col items-start gap-8 md:w-1/2 z-20">
            <h1 className="text-6xl font-bold tracking-tighter md:text-8xl leading-[0.9]">
              Hello, I'm <br /> Shlok.
            </h1>
            <RotatingText />
            <p className="max-w-md text-lg text-gray-500 md:text-xl leading-relaxed">
              Building digital experiences that blend aesthetic perfection with architectural robustness.
            </p>
            <a 
              href="/ShlokGarg_Resume.pdf" 
              download="ShlokGarg_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-white transition-transform hover:scale-105 dark:bg-white dark:text-black font-medium"
            >
              Download Resume
            </a>
          </div>
          
          <div className="flex h-[50vh] w-full items-center justify-center md:h-auto md:w-1/2 z-10">
            <div className="relative aspect-square w-[280px] md:w-[450px] flex items-center justify-center md:translate-x-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 blur-3xl opacity-60 animate-pulse" />
              <img 
                src="/avatar2.png" 
                alt="Shlok Garg" 
                className="relative h-full w-full object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-700" 
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-24 scroll-mt-32">
          <div className="w-full pb-12">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">The Stack.</h2>
            <p className="mt-4 text-gray-500">Tools and technologies I use to build the future.</p>
          </div>
          {isDarkMode ? (
            <MagicBentoDark 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          ) : (
            <MagicBento />
          )}
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full bg-transparent py-24 scroll-mt-32">
           <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Selected Works.</h2>
            <p className="mt-4 text-gray-500">A curation of my best engineering efforts.</p>
          </div>
          <ScrollStack />
        </section>

        {/* Footer */}
        <footer id="contact" className="flex w-full flex-col items-center justify-center bg-transparent py-24 text-center scroll-mt-32">
          <h2 className="text-6xl font-bold tracking-tighter md:text-9xl">Let's Talk.</h2>
          <div className="mt-8 flex gap-6">
            <a href="mailto:shlok@example.com" className="rounded-full bg-black px-8 py-4 text-white transition-transform hover:scale-105 dark:bg-white dark:text-black">
              Email Me
            </a>
            <a href="https://github.com/ShlokGarg22" target="_blank" rel="noreferrer" className="rounded-full border border-gray-200 bg-white px-8 py-4 text-black transition-colors hover:bg-gray-50 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-900">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shlok-garg-524991320" target="_blank" rel="noreferrer" className="rounded-full border border-gray-200 bg-white px-8 py-4 text-black transition-colors hover:bg-gray-50 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-900">
              LinkedIn
            </a>
          </div>
          <p className="mt-12 text-sm text-gray-400">
            © 2026 Shlok Garg. Crafted with React & Framer Motion.
          </p>
        </footer>
      </main>

      <Dock />
    </div>
  );
}

export default App;
