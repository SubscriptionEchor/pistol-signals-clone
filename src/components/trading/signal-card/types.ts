export interface SignalData {
  coin: string;
  timestamp: string;
  type: 'Long' | 'Short';
  entry: string[];
  exit: string[];
  stopLoss: string;
  leverage: string;
}