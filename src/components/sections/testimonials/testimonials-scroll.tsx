import { useRef, useEffect } from 'react';
import { TestimonialCard } from './testimonial-card';
import { motion } from 'framer-motion';



// Duplicate testimonials for continuous scrolling
// const duplicatedTestimonials = [
//   ...testimonials,
//   ...testimonials,
//   // ...testimonials,
// ];

export function TestimonialsScroll({data}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let startTime: number;
    const duration = 100000; // 60 seconds for one complete scroll

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % duration;
      const percentage = (progress / duration) * 100;

      if (scrollContainer) {
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollContainer.scrollLeft = (maxScroll * percentage) / 100;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling Container */}
      <div

        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden relative py-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {data.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.name}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[400px]"
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
