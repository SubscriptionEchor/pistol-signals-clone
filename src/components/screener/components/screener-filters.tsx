import { Button } from '@/components/ui/button';
import { TimeIntervalSelector } from './time-interval-selector';
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
      <TimeIntervalSelector 
        value={timeInterval} 
        thresholds={thresholds}
        onChange={onTimeIntervalChange}
        onThresholdChange={onThresholdChange}
        onReset={onResetThresholds}
      />
      
      <div className="flex gap-4">
        <Button
          variant="gradient"
          onClick={onStartScreener}
          className="flex items-center gap-2"
        >
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
  );
}