import { TrendingDown, Rocket } from 'lucide-react';

interface FooterItemProps {
  label: string;
  value: string;
  icon: typeof TrendingDown | typeof Rocket;
}

function FooterItem({ label, value, icon: Icon }: FooterItemProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-3">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
        <Icon className="w-4 h-4" />
        {label}
      </div>
      <p className="font-medium">{value}</p>
    </div>
  );
}

interface SignalFooterProps {
  stopLoss: string;
  leverage: string;
}

export function SignalFooter({ stopLoss, leverage }: SignalFooterProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FooterItem
        label="Stop Loss"
        value={stopLoss}
        icon={TrendingDown}
      />
      <FooterItem
        label="Leverage"
        value={leverage}
        icon={Rocket}
      />
    </div>
  );
}