interface DominanceCardProps {
  symbol: string;
  value: string;
  color: string;
}

export function DominanceCard({ symbol, value, color }: DominanceCardProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center`}>
          {symbol}
        </div>
        <span>{symbol}</span>
      </div>
      <span className="text-xl font-bold">{value}</span>
    </div>
  );
}