export interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change1h: string;
  change24h: string;
  change7d: string;
  marketCap: string;
  volume: string;
  supply: string;
  isPositive1h: boolean;
  isPositive24h: boolean;
  isPositive7d: boolean;
  logo: string;
}

export interface Category {
  id: string;
  label: string;
}