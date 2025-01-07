import { ReviewCard } from './review-card';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Professional Trader",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    content: "Pistol Signals has transformed my trading strategy. The AI-powered signals are incredibly accurate and have helped me achieve consistent profits."
  },
  {
    name: "Michael Chen",
    role: "Crypto Investor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    content: "The real-time market insights and risk management features are exceptional. This platform has become an essential part of my daily trading routine."
  },
  {
    name: "Emma Davis",
    role: "Day Trader",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
    content: "The telegram signals are timely and precise. I've seen a significant improvement in my trading performance since joining Pistol Signals."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ReviewsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {reviews.map((review, index) => (
        <ReviewCard
          key={review.name}
          {...review}
          index={index}
        />
      ))}
    </motion.div>
  );
}