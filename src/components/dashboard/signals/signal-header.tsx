interface SignalHeaderProps {
  coin: string;
  timestamp: string;
  type: string;
}

export function SignalHeader({ coin, timestamp, type }: SignalHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center">
          <img 
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
            alt={coin}
            className="w-7 h-7"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">{coin}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      <span className="px-6 py-2 bg-purple-400/20 text-purple-300 rounded-full text-sm font-medium">
        {type}
      </span>
    </div>
  );
}