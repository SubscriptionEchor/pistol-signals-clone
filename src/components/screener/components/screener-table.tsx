import { Star, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CoinData, TimeInterval } from '../types';

interface ScreenerTableProps {
  data: CoinData[];
  timeInterval: TimeInterval;
  onToggleFavorite: (symbol: string) => void;
}

export function ScreenerTable({ data, timeInterval, onToggleFavorite }: ScreenerTableProps) {
  return (
    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Coin</th>
            <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Price</th>
            <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">
              {timeInterval} Change
            </th>
            <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">24h Volume</th>
            <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <motion.tr
              key={coin.symbol}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border-b border-white/10 last:border-0"
            >
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onToggleFavorite(coin.symbol)}
                    className={`p-1 rounded-lg transition-colors ${
                      coin.isFavorite ? 'text-yellow-400' : 'text-gray-500 hover:text-gray-400'
                    }`}
                  >
                    <Star className="w-5 h-5" />
                  </button>
                  <span className="font-medium">{coin.symbol}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-right">{coin.price}</td>
              <td className={`py-4 px-6 text-right ${
                coin.intervals[timeInterval].change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {coin.intervals[timeInterval].change}%
              </td>
              <td className="py-4 px-6 text-right">{coin.volume24h}</td>
              <td className="py-4 px-6 text-right">
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-gray-400" />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}