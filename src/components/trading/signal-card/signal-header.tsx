interface SignalHeaderProps {
  coin: string;
  timestamp: string;
  type: 'Long' | 'Short';
}

export function SignalHeader({ coin, timestamp, type }: SignalHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center">
          <img 
            src="/bitcoin-logo.svg"
            alt={coin}
            className="w-6 h-6"
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
  );
}