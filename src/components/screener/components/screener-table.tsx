
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

  const getMatchingTimeframes = (coin: CoinData): TimeInterval[] => {
    return Object.entries(coin.intervals).reduce((acc, [interval, data]) => {
      if (Math.abs(Number(data.change)) >= data.threshold) {
        acc.push(interval as TimeInterval);
      }
      return acc;
    }, [] as TimeInterval[]);
  };

  return (
    <div className="relative w-full rounded-xl border border-white/10">
      {/* Scroll Indicators */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden" />

      {/* Table Container */}
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <div className="min-w-[800px]"> {/* Minimum width to prevent squishing */}
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-black/20">
                {/* Sticky first column */}
                <th className="sticky left-0 bg-black/20 z-10 text-left py-4 px-6 text-sm font-medium text-gray-400">
                  Coin
                </th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Current Price</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">-1{timeInterval}</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">-2{timeInterval}</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">-3{timeInterval}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((coin) => {
                const matchingTimeframes = getMatchingTimeframes(coin);
                const hasMatches = matchingTimeframes.length > 0;

                return (
                  <motion.tr
                    key={coin.symbol}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`
                      border-b border-white/10 last:border-0 transition-all duration-300
                      ${hasMatches ? 'bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5' : 'hover:bg-white/[0.03]'}
                    `}
                  >
                    {/* Sticky first column */}
                    <td className="sticky left-0 bg-inherit z-10 py-4 px-6">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onToggleFavorite(coin.symbol)}
                          className={`p-1 rounded-lg transition-colors ${
                            coin.isFavorite ? 'text-yellow-400' : 'text-gray-500 hover:text-gray-400'
                          }`}
                        >
                          <Star className="w-5 h-5" fill={coin.isFavorite ? "currentColor" : "none"} />
                        </button>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-medium whitespace-nowrap">{coin.symbol}</span>
                            <div className="flex flex-wrap gap-1">
                              {matchingTimeframes.map((tf) => (
                                <span 
                                  key={tf}
                                  className="px-2 py-0.5 text-xs bg-gradient-primary rounded-full flex items-center gap-1 whitespace-nowrap"
                                >
                                  <Clock className="w-3 h-3" />
                                  {tf}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-end">
                        <span className={`px-2 py-1 rounded whitespace-nowrap ${
                          hasMatches ? 'bg-green-500/20 text-green-400' : 'text-gray-400'
                        }`}>
                          {formatPrice(coin.priceHistory.current)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400 whitespace-nowrap">
                      {formatPrice(coin.priceHistory.past1)}
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400 whitespace-nowrap">
                      {formatPrice(coin.priceHistory.past2)}
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400 whitespace-nowrap">
                      {formatPrice(coin.priceHistory.past3)}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}