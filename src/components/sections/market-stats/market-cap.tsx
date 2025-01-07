import { motion } from 'framer-motion';

interface MarketCapProps {
  value: string;
  change: string;
}

export function MarketCap({ value, change }: MarketCapProps) {
  const isNegative = change.startsWith('-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 rounded-xl p-6 border border-white/10"
    >
      <h3 className="text-lg font-semibold mb-4">Market Cap</h3>
      <div className="space-y-2">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-sm ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
          {change}
        </div>
      </div>
    </motion.div>
  );
}