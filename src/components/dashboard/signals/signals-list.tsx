import { motion } from 'framer-motion';
import { SignalCard } from './signal-card';
import type { Signal } from './types';

const signals: Signal[] = [
  {
    coin: 'Bitcoin',
    timestamp: 'Today, 14:45 UTC',
    type: 'Long',
    entry: ['$51,283', '$50,478', '$49,792'],
    exit: ['$65,792', '$66,890', '$68,990'],
    stopLoss: '1%',
    leverage: '4x'
  }
];

export function SignalsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {signals.map((signal, index) => (
        <SignalCard key={index} signal={signal} />
      ))}
    </motion.div>
  );
}