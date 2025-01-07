import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricProps {
  label: string;
  values: string[];
  icon: typeof TrendingUp | typeof TrendingDown;
  iconColor: string;
}

function Metric({ label, values, icon: Icon, iconColor }: MetricProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`p-3 rounded-lg ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <p className="font-medium">{values.join(' / ')}</p>
      </div>
    </div>
  );
}

interface SignalMetricsProps {
  entry: string[];
  exit: string[];
}

export function SignalMetrics({ entry, exit }: SignalMetricsProps) {
  return (
    <div className="space-y-6 mb-6">
      <Metric 
        label="Entry"
        values={entry}
        icon={TrendingUp}
        iconColor="bg-emerald-500/10 text-emerald-500"
      />
      <Metric 
        label="Exit"
        values={exit}
        icon={TrendingDown}
        iconColor="bg-red-500/10 text-red-500"
      />
    </div>
  );
}