import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import type { TimeInterval } from '../types';

const intervals: { value: TimeInterval; label: string }[] = [
  { value: '5m', label: '5m' },
  { value: '15m', label: '15m' },
  { value: '30m', label: '30m' },
  { value: '1h', label: '1h' },
  { value: '4h', label: '4h' },
];

interface TimeIntervalSelectorProps {
  value: TimeInterval;
  thresholds: { [key in TimeInterval]: number };
  onChange: (interval: TimeInterval) => void;
  onThresholdChange: (interval: TimeInterval, threshold: number) => void;
  onReset: () => void;
}

export function TimeIntervalSelector({ 
  value, 
  thresholds,
  onThresholdChange,
  onReset
}: TimeIntervalSelectorProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex gap-4">
        {intervals.map((interval) => (
          <div key={interval.value} className="flex items-center gap-2">
            <div className={`px-4 py-2 rounded-lg text-sm font-medium ${
              value === interval.value
                ? 'bg-white/10 text-white'
                : 'bg-white/5 text-gray-400'
            }`}>
              {interval.label}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">≥</span>
              <input
                type="number"
                min="0"
                max="100"
                value={thresholds[interval.value]}
                onChange={(e) => onThresholdChange(interval.value, Number(e.target.value))}
                className="w-16 px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-center"
              />
              <span className="text-gray-400">%</span>
            </div>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-400 hover:bg-white/10 transition-colors flex items-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Reset
      </motion.button>
    </div>
  );
}