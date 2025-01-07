import { TrendingDown, Rocket } from 'lucide-react';
import { FooterItem } from './footer-item';

interface SignalFooterProps {
  stopLoss: string;
  leverage: string;
  type: String
}

export function SignalFooter({ stopLoss, leverage, type }: SignalFooterProps) {
  stopLoss = !stopLoss ? null : typeof stopLoss === 'string' && stopLoss.includes('%')
    ? stopLoss
    : `$${parseFloat(stopLoss)}`;
  return (
    <div className="grid grid-cols-2 gap-4">
      <FooterItem
        label="Stop Loss"
        value={stopLoss}
        icon={TrendingDown}
      />
      {type != "SPOT" || leverage ?
        <FooterItem
          label="Leverage"
          value={leverage}
          icon={Rocket}
        /> : null}
    </div>
  );
}