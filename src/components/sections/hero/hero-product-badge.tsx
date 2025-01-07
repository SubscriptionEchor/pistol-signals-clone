import { motion } from 'framer-motion';
import { Windows, Apple } from 'lucide-react';

export function HeroProductBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-8 flex items-center gap-4"
    >
      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?auto=format&fit=crop&w=32&h=32&q=80"
          alt="Product Hunt"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-medium">#4 Product of the Day</span>
      </div>
      <div className="flex items-center gap-2">
        <Windows className="w-5 h-5" />
        <Apple className="w-5 h-5" />
      </div>
    </motion.div>
  );
}