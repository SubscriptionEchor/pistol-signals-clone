import { SignalHeader } from './signal-header';
import { SignalPrice } from './signal-price';
import { SignalStats } from './signal-stats';
import type { Signal } from './types';

interface SignalCardProps {
  signal: Signal;
}

export function SignalCard({ signal }: SignalCardProps) {
  return (
    <div className="bg-[#111111] rounded-2xl p-6 space-y-8">
      <SignalHeader 
        coin={signal.coin}
        timestamp={signal.timestamp}
        type={signal.type}
      />
      
      <div className="space-y-6">
        <SignalPrice 
          label="Entry"
          values={signal.entry}
          iconBg="bg-emerald-500/20"
        />
        <SignalPrice 
          label="Exit"
          values={signal.exit}
          iconBg="bg-red-500/20"
        />
      </div>

      <SignalStats 
        stopLoss={signal.stopLoss}
        leverage={signal.leverage}
      />
    </div>
  );
}