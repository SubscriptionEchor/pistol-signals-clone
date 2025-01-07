import { Section } from '../ui/section';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Professional Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Pistol Signals has transformed my trading strategy. The AI-powered signals are incredibly accurate and have helped me achieve consistent profits.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Crypto Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "The real-time market insights and risk management features are exceptional. This platform has become an essential part of my daily trading routine.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Day Trader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "The telegram signals are timely and precise. I've seen a significant improvement in my trading performance since joining Pistol Signals.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <Section className="bg-white/5">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Trusted by Traders Worldwide
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Join thousands of satisfied traders who have improved their trading with our signals
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-400 text-sm">{review.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">{review.content}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}