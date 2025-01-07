import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  trend: number;
  delay?: number;
}

export function StatsCard({ label, value, trend, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <div className={`flex items-center gap-1 text-sm ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
          <span>{Math.abs(trend)}%</span>
          <ArrowUpRight className={`w-4 h-4 ${trend < 0 ? 'rotate-180' : ''}`} />
        </div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </motion.div>
  );
}