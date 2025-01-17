import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricRow } from './metric-row';

interface SignalMetricsProps {
  entry: string[];
  exit: string[];
}

export function SignalMetrics({ entry, exit, type }: SignalMetricsProps) {
  const top = type?.toLowerCase() == "long" ? '/svg/candlestick-chart-up.svg' : '/svg/candlestick-chart-down.svg'
  const bottom = type?.toLowerCase() == "long" ? '/svg/candlestick-chart-down.svg' : '/svg/candlestick-chart-up.svg'
  return (
    <div className="space-y-6 mb-6">
      <MetricRow
        label="Entry"
        values={entry}
        icon={top}
        iconColor="bg-emerald-500/10 text-emerald-500"
      />
      <MetricRow
        label="Exit"
        values={exit}
        icon={bottom}
        iconColor="bg-red-500/10 text-red-500"
      />
    </div>
  );
}