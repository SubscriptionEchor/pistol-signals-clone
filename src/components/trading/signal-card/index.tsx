import { SignalHeader } from './signal-header';
import { SignalMetrics } from './signal-metrics';
import { SignalFooter } from './signal-footer';

interface SignalCardProps {
  coin: string;
  timestamp: string;
  type: 'Long' | 'Short';
  entry: string[];
  exit: string[];
  stopLoss: string;
  leverage: string;
}

export function SignalCard(props: SignalCardProps) {
  return (
    <div className="relative group">
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-[#111] rounded-2xl p-6 border border-white/5">
        <SignalHeader 
          coin={props.coin}
          timestamp={props.timestamp}
          type={props.type}
        />
        
        <SignalMetrics 
          entry={props.entry}
          exit={props.exit}
        />
        
        <SignalFooter 
          stopLoss={props.stopLoss}
          leverage={props.leverage}
        />
      </div>
    </div>
  );
}