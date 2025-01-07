import { TrendingUp, TrendingDown } from 'lucide-react';

interface SignalMetricsProps {
  entry: string[];
  exit: string[];
}

export function SignalMetrics({ entry, exit }: SignalMetricsProps) {
  return (
    <div className="space-y-6 mb-8">
      <MetricRow 
        label="Entry"
        values={entry}
        icon={TrendingUp}
        iconColor="emerald"
      />
      <MetricRow 
        label="Exit"
        values={exit}
        icon={TrendingDown}
        iconColor="red"
      />
    </div>
  );
}

interface MetricRowProps {
  label: string;
  values: string[];
  icon: React.ElementType;
  iconColor: 'emerald' | 'red';
}

function MetricRow({ label, values, icon: Icon, iconColor }: MetricRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`p-3 rounded-lg bg-${iconColor}-500/10`}>
        <Icon className={`w-5 h-5 text-${iconColor}-500`} />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <p className="font-medium text-white">{values.join(' / ')}</p>
      </div>
    </div>
  );
}