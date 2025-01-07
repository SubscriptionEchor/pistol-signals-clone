import { motion } from 'framer-motion';

interface FearGreedIndexProps {
  value: number;
  sentiment: string;
}

export function FearGreedIndex({ value, sentiment }: FearGreedIndexProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white/5 rounded-xl p-6 border border-white/10"
    >
      <h3 className="text-lg font-semibold mb-4">Fear & Greed</h3>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
          <span className="text-xl font-bold">{value}</span>
        </div>
        <span className="text-green-500">{sentiment}</span>
      </div>
    </motion.div>
  );
}