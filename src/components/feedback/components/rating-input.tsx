import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { RatingInputProps } from '../types';

export function RatingInput({ value, onChange, label, name }: RatingInputProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm text-gray-400">{label}</label>
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
                ? 'bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Star className="w-6 h-6" fill={rating <= value ? 'currentColor' : 'none'} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}