import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { RatingInputProps } from '../types';

export function RatingInput({ value, onChange, label, name }: RatingInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-400">{label}</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <motion.button
            key={rating}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(rating === value ? 0 : rating)}
            className={`p-2 rounded-lg transition-colors ${
              rating <= value
                ? 'bg-gradient-primary text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Star className="w-5 h-5" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}