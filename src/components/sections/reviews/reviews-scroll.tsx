import { useRef, useEffect } from 'react';
import { ReviewCard } from './review-card';
import { motion } from 'framer-motion';

interface ReviewsScrollProps {
  rows: number;
}

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Professional Trader',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200',
    content:
      'Pistol Signals has transformed my trading strategy. The AI-powered signals are incredibly accurate and have helped me achieve consistent profits.',
  },
  {
    name: 'Michael Chen',
    role: 'Crypto Investor',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
    content:
      'The real-time market insights and risk management features are exceptional. This platform has become an essential part of my daily trading routine.',
  },
  {
    name: 'Emma Davis',
    role: 'Day Trader',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200',
    content:
      "The telegram signals are timely and precise. I've seen a significant improvement in my trading performance since joining Pistol Signals.",
  },
  {
    name: 'Daniel Smith',
    role: 'Forex Trader',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200',
    content:
      "The accuracy of these signals is remarkable. I've been able to consistently grow my portfolio since subscribing to Pistol Signals.",
  },
];

// Duplicate reviews for continuous scrolling
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

export function ReviewsScroll({ rows }: ReviewsScrollProps) {
  const scrollRefs = Array.from({ length: rows }, () =>
    useRef<HTMLDivElement>(null)
  );

  useEffect(() => {
    const scrollContainers = scrollRefs.map((ref) => ref.current);

    const animationFrames: number[] = [];
    const durations = [60000, 80000]; // Different speeds for each row

    scrollContainers.forEach((scrollContainer, index) => {
      if (!scrollContainer) return;

      let animationFrameId: number;
      let startTime: number;
      const direction = index % 2 === 0 ? 'rtl' : 'ltr'; // Alternate scroll direction

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress =
          (timestamp - startTime) % durations[index % durations.length];
        const percentage =
          (progress / durations[index % durations.length]) * 100;

        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollPosition =
          direction === 'rtl'
            ? (maxScroll * percentage) / 100
            : maxScroll - (maxScroll * percentage) / 100;

        scrollContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
      animationFrames.push(animationFrameId);
    });

    return () => {
      animationFrames.forEach((frame) => cancelAnimationFrame(frame));
    };
  }, []);

  return (
    <div className="space-y-6">
      {scrollRefs.map((ref, rowIndex) => (
        <div className="relative w-full" key={`row-${rowIndex}`}>
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          {/* Scrolling Container */}
          <div
            ref={ref}
            className="flex gap-6 overflow-x-hidden scroll-smooth relative py-4"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}-row-${rowIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[400px]"
              >
                <ReviewCard {...review} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
