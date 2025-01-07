// Common response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest extends LoginRequest {
  name: string;
}
export interface ResendEmail {
  email: string;
}
export interface GetUser {
  Authorization: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Trading signal types
export interface TradingSignal {
  id: string;
  coin: string;
  type: 'LONG' | 'SHORT';
  entry: string;
  target: string;
  stopLoss: string;
  timestamp: string;
}

// Market data types
export interface MarketStats {
  totalMarketCap: string;
  volume24h: string;
  btcDominance: string;
  fearGreedIndex: number;
}
