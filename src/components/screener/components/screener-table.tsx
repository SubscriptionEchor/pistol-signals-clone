
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import type { CoinData, TimeInterval } from '../types';

interface ScreenerTableProps {
  data: CoinData[];
  timeInterval: TimeInterval; 
  onToggleFavorite: (symbol: string) => void;
}

export function ScreenerTable({ data, timeInterval, onToggleFavorite }: ScreenerTableProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  const getMatchingTimeframes = (coin: CoinData) => {
    return Object.entries(coin.intervals)
      .filter(([_, data]) => Math.abs(Number(data.change)) >= data.threshold)
      .map(([interval]) => interval);
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-black/20">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Coin</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Current Price</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">-1{timeInterval}</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">-2{timeInterval}</th>
              <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">-3{timeInterval}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => {
              const matchingTimeframes = getMatchingTimeframes(coin);
              const currentIntervalMatches = matchingTimeframes.includes(timeInterval);
              const currentIntervalData = coin.intervals[timeInterval];

              return (
                <motion.tr
                  key={coin.symbol}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`border-b border-white/10 last:border-0 transition-all duration-200 ${
                    currentIntervalMatches 
                      ? 'bg-white/5 hover:bg-white/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onToggleFavorite(coin.symbol)}
                        className={`p-1 rounded-lg transition-colors ${
                          coin.isFavorite ? 'text-yellow-400' : 'text-gray-500 hover:text-gray-400'
                        }`}
                      >
                        <Star className="w-5 h-5" fill={coin.isFavorite ? "currentColor" : "none"} />
                      </button>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{coin.symbol}</span>
                          {currentIntervalMatches && (
                            <span className="text-xs text-gray-400">
                              {Math.abs(Number(currentIntervalData.change))}%
                            </span>
                          )}
                        </div>
                        {matchingTimeframes.length > 0 && matchingTimeframes.length > (currentIntervalMatches ? 1 : 0) && (
                          <div className="flex flex-wrap gap-1">
                            {matchingTimeframes
                              .filter(interval => interval !== timeInterval)
                              .map((interval) => (
                                <span
                                  key={interval}
                                  className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded-full flex items-center gap-1"
                                >
                                  <Clock className="w-3 h-3" />
                                  {interval}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-medium">
                    {formatPrice(coin.priceHistory.current)}
                  </td>
                  <td className="py-4 px-6 text-right text-gray-400">
                    {formatPrice(coin.priceHistory.past1)}
                  </td>
                  <td className="py-4 px-6 text-right text-gray-400">
                    {formatPrice(coin.priceHistory.past2)}
                  </td>
                  <td className="py-4 px-6 text-right text-gray-400">
                    {formatPrice(coin.priceHistory.past3)}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
