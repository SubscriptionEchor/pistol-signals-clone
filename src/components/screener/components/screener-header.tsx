import { motion } from 'framer-motion';
import { LineChart } from 'lucide-react';

export function ScreenerHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-8"
    >
      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
        <LineChart className="w-6 h-6 text-purple-400" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Market Screener</h1>
        <p className="text-gray-400">Monitor market movements and discover trading opportunities</p>
      </div>
    </motion.div>
  );
}