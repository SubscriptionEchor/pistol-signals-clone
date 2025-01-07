import { ArrowRight } from 'lucide-react';

interface SignalPriceProps {
  label: string;
  values: string[];
  iconBg: string;
}

export function SignalPrice({ label, values, iconBg }: SignalPriceProps) {
  return (
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-lg ${iconBg}`}>
        <ArrowRight className="w-5 h-5" />
      </div>
      <div>
        <p className="text-gray-500 mb-2">{label}</p>
        <p className="text-lg font-medium">{values.join(' / ')}</p>
      </div>
    </div>
  );
}