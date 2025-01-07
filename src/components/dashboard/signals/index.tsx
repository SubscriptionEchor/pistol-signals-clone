```typescript
import { motion } from 'framer-motion';
import { SignalCard } from './signal-card';
import type { TradingSignal } from '@/types/dashboard';

const signals: TradingSignal[] = [
  {
    coin: 'BTC',
    type: 'LONG',
    entry: '$51,283',
    target: '$54,478',
    stopLoss: '$49,892',
    profit: '+12.3%',
    isProfit: true,
    timestamp: '14:45 UTC'
  },
  {
    coin: 'ETH',
    type: 'SHORT',
    entry: '$3,234',
    target: '$3,064',
    stopLoss: '$3,352',
    profit: '-4.2%',
    isProfit: false,
    timestamp: '12:45 UTC'
  }
];

export function SignalsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white/5 rounded-xl backdrop-blur-sm"
    >
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-semibold">Active Signals</h2>
      </div>
      <div className="divide-y divide-white/10">
        {signals.map((signal, index) => (
          <SignalCard key={index} signal={signal} />
        ))}
      </div>
    </motion.div>
  );
}
```