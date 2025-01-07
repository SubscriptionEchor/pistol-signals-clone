import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricRow } from './metric-row';

interface SignalMetricsProps {
  entry: string[];
  exit: string[];
}

export function SignalMetrics({ entry, exit }: SignalMetricsProps) {
  return (
    <div className="space-y-6 mb-6">
      <MetricRow 
        label="Entry"
        values={entry}
        icon={TrendingUp}
        iconColor="bg-emerald-500/10 text-emerald-500"
      />
      <MetricRow 
        label="Exit"
        values={exit}
        icon={TrendingDown}
        iconColor="bg-red-500/10 text-red-500"
      />
    </div>
  );
}