import { motion } from 'framer-motion';
import { LineChart, Info } from 'lucide-react';

export function ScreenerHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 mb-8"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
          <LineChart className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Market Screener</h1>
          <p className="text-gray-400">Monitor market movements and discover trading opportunities</p>
        </div>
      </div>

      <div className="flex items-start gap-2 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
        <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-2 text-sm">
          <p className="text-blue-400">Quick Tips:</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Set percentage thresholds for each timeframe</li>
            <li>Star coins to track them in your favorites</li>
            <li>Use timeframe filters to focus on specific intervals</li>
            <li>Highlighted rows indicate coins meeting your criteria</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}