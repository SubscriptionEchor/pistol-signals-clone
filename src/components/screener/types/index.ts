export type TimeInterval = '5m' | '15m' | '30m' | '1h' | '4h';

export interface PriceHistory {
  current: number;
  past1: number;
  past2: number;
  past3: number;
}

export interface IntervalThreshold {
  change: number;
  threshold: number;
}

export interface CoinData {
  symbol: string;
  price: string;
  priceHistory: PriceHistory;
  intervals: {
    [key in TimeInterval]: IntervalThreshold;
  };
  volume24h: string;
  isFavorite: boolean;
  isHighlighted?: boolean;
}

export interface ScreenerFilters {
  timeInterval: TimeInterval;
  onlyFavorites: boolean;
  thresholds: {
    [key in TimeInterval]: number;
  };
  page: number;
  perPage: number;
}