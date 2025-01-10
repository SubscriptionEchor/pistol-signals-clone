import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;
    let rotation = 0;

    // Set canvas size
    const resize = () => {
      canvas.width = 800; // Increased size
      canvas.height = 800; // Increased size
    };
    resize();

    // Draw globe
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center of the canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 300; // Increased radius

      // Draw meridians
      for (let i = 0; i < 12; i++) { // Increased number of lines
        const angle = (i / 12) * Math.PI * 2 + rotation;
        
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(Math.cos(angle)),
          radius,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(0, 209, 255, ${0.15 + Math.abs(Math.cos(angle)) * 0.25})`; // Increased opacity
        ctx.lineWidth = 1.5; // Increased line width
        ctx.stroke();
      }

      // Draw parallels
      for (let i = 0; i < 12; i++) { // Increased number of lines
        const y = ((i + 0.5) / 12) * radius * 2 - radius;
        const radiusAtHeight = Math.sqrt(radius * radius - y * y);
        
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY + y,
          radiusAtHeight,
          radiusAtHeight * 0.15,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 + (1 - Math.abs(y) / radius) * 0.25})`; // Increased opacity
        ctx.lineWidth = 1.5; // Increased line width
        ctx.stroke();
      }

      // Animate rotation
      rotation += 0.002; // Slower rotation
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-[800px] h-[800px] opacity-60"
      />
    </motion.div>
  );
}