export interface TradeConfidenceValue {
  value: number;
  label: 'Strong Sell' | 'Sell' | 'Neutral' | 'Buy' | 'Strong Buy';
  color: string;
}

export interface GaugeChartProps {
  value: number;
  size?: number;
  className?: string;
}