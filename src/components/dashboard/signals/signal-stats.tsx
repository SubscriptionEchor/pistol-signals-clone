import { TrendingDown, Rocket } from 'lucide-react';

interface SignalStatsProps {
  stopLoss: string;
  leverage: string;
}

export function SignalStats({ stopLoss, leverage }: SignalStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#1A1A1A] rounded-lg p-4">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <TrendingDown className="w-4 h-4" />
          <span>Stop Loss</span>
        </div>
        <p className="text-lg font-medium">{stopLoss}</p>
      </div>
      <div className="bg-[#1A1A1A] rounded-lg p-4">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <Rocket className="w-4 h-4" />
          <span>Leverage</span>
        </div>
        <p className="text-lg font-medium">{leverage}</p>
      </div>
    </div>
  );
}