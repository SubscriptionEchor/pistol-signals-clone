```typescript
export interface MarketStats {
  totalMarketCap: {
    value: string;
    change: string;
    isPositive: boolean;
  };
  tradeConfidence: {
    value: number;
    label: string;
  };
  volume24h: {
    value: string;
    change: string;
    isPositive: boolean;
  };
}

export interface TradingSignal {
  coin: string;
  type: 'LONG' | 'SHORT';
  entry: string;
  target: string;
  stopLoss: string;
  profit: string;
  isProfit: boolean;
  timestamp: string;
}
```