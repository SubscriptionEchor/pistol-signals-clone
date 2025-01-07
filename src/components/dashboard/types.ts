export interface StatData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface SignalData {
  coin: string;
  timestamp: string;
  type: 'Long' | 'Short';
  entry: string[];
  exit: string[];
  stopLoss: string;
  image: string;
  leverage: string;
}