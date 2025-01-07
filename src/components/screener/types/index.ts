export type TimeInterval = '5m' | '15m' | '30m' | '1h' | '4h';

export interface IntervalThreshold {
  change: number;
  threshold: number;
}

export interface CoinData {
  symbol: string;
  price: string;
  intervals: {
    [key in TimeInterval]: IntervalThreshold;
  };
  volume24h: string;
  isFavorite: boolean;
}

export interface ScreenerFilters {
  timeInterval: TimeInterval;
  search: string;
  onlyFavorites: boolean;
  thresholds: {
    [key in TimeInterval]: number;
  };
  page: number;
  perPage: number;
}