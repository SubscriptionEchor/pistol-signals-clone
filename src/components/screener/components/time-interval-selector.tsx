import { motion } from 'framer-motion';
import { RotateCcw, Info } from 'lucide-react';
import type { TimeInterval } from '../types';

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
  onChange,
  onThresholdChange,
  onReset
}: TimeIntervalSelectorProps) {
  const intervals = [
    { value: '5m', label: '5m', tooltip: 'Last 5 minutes' },
    { value: '15m', label: '15m', tooltip: 'Last 15 minutes' },
    { value: '30m', label: '30m', tooltip: 'Last 30 minutes' },
    { value: '1h', label: '1h', tooltip: 'Last hour' },
    { value: '4h', label: '4h', tooltip: 'Last 4 hours' },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex flex-wrap gap-4">
          {intervals.map((interval) => (
            <div key={interval.value} className="group relative">
              <button
                onClick={() => onChange(interval.value as TimeInterval)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  value === interval.value
                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {interval.label}
              </button>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {interval.tooltip}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {intervals.map((interval) => (
          <div key={interval.value} className="relative group">
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="100"
                value={thresholds[interval.value as TimeInterval]}
                onChange={(e) => onThresholdChange(interval.value as TimeInterval, Number(e.target.value))}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-center"
              />
              <span className="text-sm text-gray-400">%</span>
              <Info className="w-4 h-4 text-gray-400 cursor-help" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Set minimum price change for {interval.label} timeframe
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}