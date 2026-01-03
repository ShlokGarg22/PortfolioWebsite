import React, { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

interface ClickSparkProps {
  sparkColor?: string;
}

const ClickSpark: React.FC<ClickSparkProps> = ({ sparkColor = '#000000' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createSpark = (e: MouseEvent) => {
      const sparkCount = 8;
      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle: Math.random() * Math.PI * 2,
          startTime: performance.now(),
        });
      }
    };

    window.addEventListener('click', createSpark);

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const age = time - spark.startTime;
        const life = 600; // ms

        if (age > life) return false;

        const progress = age / life;
        const speed = 4 * (1 - progress);
        
        spark.x += Math.cos(spark.angle) * speed;
        spark.y += Math.sin(spark.angle) * speed;

        ctx.globalAlpha = 1 - progress;
        ctx.fillStyle = sparkColor;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', createSpark);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkColor]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};

export default ClickSpark;
