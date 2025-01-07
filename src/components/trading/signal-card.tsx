import { TrendingDown, TrendingUp, Rocket } from 'lucide-react';

interface SignalCardProps {
  coin: string;
  timestamp: string;
  type: 'Long' | 'Short';
  entry: string[];
  exit: string[];
  stopLoss: string;
  leverage: string;
  image: string;
}

export function SignalCard({
  coin,
  timestamp,
  type,
  entry,
  exit,
  stopLoss,
  leverage,
  image
}: SignalCardProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl" />

      <div className="relative bg-[#111111] rounded-2xl p-6 border border-white/5">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F7931A] p-2">
              <img
                src={image}
                alt={coin}
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">{coin}</h3>
              <p className="text-sm text-gray-500">{timestamp}</p>
            </div>
          </div>
          <span className="px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
            {type}
          </span>
        </div>

        {/* Entry */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-lg bg-emerald-500/10">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Entry</p>
              <p className="font-medium text-white">{entry.join(' / ')}</p>
            </div>
          </div>

          {/* Exit */}
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-lg bg-red-500/10">
              <TrendingDown className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Exit</p>
              <p className="font-medium text-white">{exit.join(' / ')}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1A1A1A] rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <TrendingDown className="w-4 h-4" />
              Stop Loss
            </div>
            <p className="font-medium text-white">{stopLoss}</p>
          </div>
          <div className="bg-[#1A1A1A] rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <Rocket className="w-4 h-4" />
              Leverage
            </div>
            <p className="font-medium text-white">{leverage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}