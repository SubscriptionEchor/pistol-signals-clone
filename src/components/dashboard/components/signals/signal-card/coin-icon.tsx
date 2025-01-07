interface CoinIconProps {
  coin: string;
}

export function CoinIcon({ coin }: CoinIconProps) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center">
      <img 
        src="/bitcoin-logo.svg"
        alt={coin}
        className="w-6 h-6"
      />
    </div>
  );
}