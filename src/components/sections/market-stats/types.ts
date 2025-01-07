export interface MarketStatsData {
  marketCap: {
    value: string;
    change: string;
  };
  fearGreed: {
    value: number;
    sentiment: string;
  };
  dominance: {
    btc: string;
    eth: string;
  };
}