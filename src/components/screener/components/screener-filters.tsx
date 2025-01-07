import { Button } from '@/components/ui/button';
import { TimeIntervalSelector } from './time-interval-selector';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { TimeInterval } from '../types';

interface ScreenerFiltersProps {
  timeInterval: TimeInterval;
  thresholds: { [key in TimeInterval]: number };
  onTimeIntervalChange: (interval: TimeInterval) => void;
  onThresholdChange: (interval: TimeInterval, threshold: number) => void;
  onToggleFavorites: () => void;
  onResetThresholds: () => void;
  showFavorites: boolean;
  onStartScreener: () => void;
  isScreenerActive: boolean;
}

export function ScreenerFilters({
  timeInterval,
  thresholds,
  onTimeIntervalChange,
  onThresholdChange,
  onToggleFavorites,
  onResetThresholds,
  showFavorites,
  onStartScreener,
  isScreenerActive
}: ScreenerFiltersProps) {
  return (
    <div className="space-y-6 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search coins..."
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="gradient"
            onClick={onStartScreener}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {isScreenerActive ? 'Stop Screener' : 'Start Screener'}
          </Button>
          
          <Button
            variant="secondary"
            onClick={onToggleFavorites}
            className={showFavorites ? 'bg-white/10' : ''}
          >
            Favorites
          </Button>
        </div>
      </div>

      <TimeIntervalSelector 
        value={timeInterval} 
        thresholds={thresholds}
        onChange={onTimeIntervalChange}
        onThresholdChange={onThresholdChange}
        onReset={onResetThresholds}
      />
    </div>
  );
}