import { DashboardLayout } from '../dashboard/layout';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, Clock } from 'lucide-react';
import { Button } from '../ui/button';

interface CoinData {
  symbol: string;
  logo: string;
  prices: {
    current: number;
    previous: number;
    beforePrevious: number;
    oldest: number;
  };
  percentageChanges: {
    '5m': number;
    '15m': number;
    '30m': number;
    '1h': number;
    '4h': number;
  };
  matchingTimeframes: string[];
}

export function Screener() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('5m');
  const [thresholds, setThresholds] = useState({
    '5m': 1,
    '15m': 2,
    '30m': 3,
    '1h': 4,
    '4h': 5
  });
  const [isScreenerActive, setIsScreenerActive] = useState(false);
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const timeframes = ['5m', '15m', '30m', '1h', '4h'];

  // Simulate fetching coin data
  useEffect(() => {
    if (isScreenerActive) {
      // Mock data - in real app this would be WebSocket data
      const mockCoins: CoinData[] = [
        {
          symbol: 'BTC',
          logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
          prices: {
            current: 48234.50,
            previous: 48100.25,
            beforePrevious: 47950.75,
            oldest: 47800.00
          },
          percentageChanges: {
            '5m': 2.5,
            '15m': 3.2,
            '30m': 4.1,
            '1h': 5.0,
            '4h': 6.2
          },
          matchingTimeframes: ['5m', '15m', '30m', '1h']
        },
        {
          symbol: 'ETH',
          logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
          prices: {
            current: 2834.50,
            previous: 2800.25,
            beforePrevious: 2750.75,
            oldest: 2700.00
          },
          percentageChanges: {
            '5m': 0.8,
            '15m': 1.2,
            '30m': 2.1,
            '1h': 3.0,
            '4h': 4.2
          },
          matchingTimeframes: ['30m', '1h']
        }
      ];
      setCoins(mockCoins);
    }
  }, [isScreenerActive]);

  const handleThresholdChange = (timeframe: string, value: string) => {
    setThresholds(prev => ({
      ...prev,
      [timeframe]: Number(value)
    }));
  };

  const toggleFavorite = (symbol: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(symbol)) {
        newFavorites.delete(symbol);
      } else {
        newFavorites.add(symbol);
      }
      return newFavorites;
    });
  };

  const meetsThreshold = (percentageChange: number, timeframe: string) => {
    return Math.abs(percentageChange) >= thresholds[timeframe];
  };

  const filteredCoins = showOnlyFavorites 
    ? coins.filter(coin => favorites.has(coin.symbol))
    : coins;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Market Screener</h1>
          <p className="text-gray-400">Monitor market movements and discover trading opportunities</p>
        </div>

        {/* Controls Section */}
        <div className="bg-[#111] rounded-xl p-6 mb-8 border border-white/10">
          <div className="space-y-6">
            {/* Thresholds */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Price Change Thresholds</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {timeframes.map((tf) => (
                  <div key={tf} className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 min-w-[40px]">{tf}</span>
                    <div className="flex items-center gap-1 flex-1">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={thresholds[tf]}
                        onChange={(e) => handleThresholdChange(tf, e.target.value)}
                        className="w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      />
                      <span className="text-sm text-gray-400">%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant={isScreenerActive ? 'gradient' : 'secondary'}
                onClick={() => setIsScreenerActive(!isScreenerActive)}
                className="w-full md:w-auto"
              >
                {isScreenerActive ? 'Stop Screener' : 'Start Screener'}
              </Button>

              <Button
                variant={showOnlyFavorites ? 'gradient' : 'secondary'}
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                className="w-full md:w-auto"
              >
                <Star className="w-4 h-4 mr-2" />
                {showOnlyFavorites ? 'Show All' : 'Show Favorites'}
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {isScreenerActive && (
          <div className="space-y-4">
            {/* Timeframe Selection */}
            <div className="flex flex-wrap gap-2">
              {timeframes.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeframe === tf
                      ? 'bg-gradient-primary text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* Table */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#111] rounded-xl border border-white/10 overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Symbol</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">Current Price</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">Change %</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">Matching Timeframes</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.map((coin) => {
                    const currentChange = coin.percentageChanges[selectedTimeframe];
                    const isHighlighted = meetsThreshold(currentChange, selectedTimeframe);
                    const isFavorite = favorites.has(coin.symbol);
                    const matchCount = coin.matchingTimeframes.length;
                    
                    return (
                      <tr 
                        key={coin.symbol} 
                        className={`border-b border-white/10 transition-colors ${
                          isHighlighted 
                            ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => toggleFavorite(coin.symbol)}
                              className={`transition-colors ${
                                isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                              }`}
                            >
                              <Star className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} />
                            </button>
                            <div className="flex items-center gap-2">
                              <img
                                src={coin.logo}
                                alt={coin.symbol}
                                className="w-6 h-6"
                              />
                              <div className="font-medium">{coin.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          ${coin.prices.current.toFixed(2)}
                        </td>
                        <td className={`p-4 text-right ${
                          currentChange >= 0 ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {currentChange >= 0 ? '+' : ''}{currentChange.toFixed(2)}%
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {matchCount >= 3 && (
                              <span className="px-2 py-1 text-xs bg-gradient-primary rounded-full">
                                Strong Signal
                              </span>
                            )}
                            <div className="flex gap-1">
                              {coin.matchingTimeframes.map((tf) => (
                                <span
                                  key={tf}
                                  className="px-2 py-1 text-xs bg-white/10 rounded-full flex items-center gap-1"
                                >
                                  <Clock className="w-3 h-3" />
                                  {tf}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}