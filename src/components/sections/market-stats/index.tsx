import { MarketCap } from './market-cap';
import { FearGreedIndex } from './fear-greed-index';
import { MarketDominance } from './market-dominance';

export function MarketStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MarketCap 
        value="$3.46T"
        change="-5.10%"
      />
      <FearGreedIndex 
        value={76}
        sentiment="Greed"
      />
      <MarketDominance 
        btcDominance="55.96%"
        ethDominance="12.80%"
      />
    </div>
  );
}