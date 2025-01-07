import { motion } from 'framer-motion';

interface FearGreedIndicatorProps {
  value: number;
  label: string;
}

export function FearGreedIndicator({ value, label }: FearGreedIndicatorProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
        <span className="text-xl font-bold">{value}</span>
      </div>
      <span className="text-green-500">{label}</span>
    </div>
  );
}