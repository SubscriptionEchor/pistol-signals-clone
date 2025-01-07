import { useState, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import type { CoinData, ScreenerFilters, TimeInterval } from '../types';

// Generate 100 mock coins
const generateMockData = (): CoinData[] => {
  return Array.from({ length: 100 }, (_, i) => ({
    symbol: `COIN${i + 1}/USDT`,
    price: `$${(Math.random() * 1000).toFixed(2)}`,
    intervals: {
      '5m': { change: (Math.random() * 10 - 5).toFixed(2), threshold: 1 },
      '15m': { change: (Math.random() * 10 - 5).toFixed(2), threshold: 4 },
      '30m': { change: (Math.random() * 10 - 5).toFixed(2), threshold: 3 },
      '1h': { change: (Math.random() * 10 - 5).toFixed(2), threshold: 2 },
      '4h': { change: (Math.random() * 10 - 5).toFixed(2), threshold: 5 }
    },
    volume24h: `$${(Math.random() * 1000).toFixed(2)}M`,
    isFavorite: false
  }));
};

const defaultThresholds = {
  '5m': 1,
  '15m': 4,
  '30m': 3,
  '1h': 2,
  '4h': 5
};

export function useScreenerData() {
  const [filters, setFilters] = useState<ScreenerFilters>({
    timeInterval: '5m',
    onlyFavorites: false,
    thresholds: { ...defaultThresholds },
    page: 1,
    perPage: 10
  });

  const [isScreenerActive, setIsScreenerActive] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const mockData = useMemo(() => generateMockData(), []);

  const filteredData = useMemo(() => {
    if (!isScreenerActive) return [];

    const filtered = mockData
      .filter(coin => {
        if (filters.onlyFavorites && !favorites.has(coin.symbol)) {
          return false;
        }
        const interval = coin.intervals[filters.timeInterval];
        return Math.abs(interval.change) >= filters.thresholds[filters.timeInterval];
      })
      .map(coin => ({
        ...coin,
        isFavorite: favorites.has(coin.symbol)
      }));

    const start = (filters.page - 1) * filters.perPage;
    const end = start + filters.perPage;
    return filtered.slice(start, end);
  }, [filters, favorites, mockData, isScreenerActive]);

  const totalPages = Math.ceil(mockData.length / filters.perPage);

  const resetThresholds = () => {
    setFilters(prev => ({
      ...prev,
      thresholds: { ...defaultThresholds }
    }));
    toast.success('Thresholds reset to default values');
  };

  const toggleFavorite = (symbol: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(symbol)) {
        next.delete(symbol);
        toast.success(`${symbol} removed from favorites`);
      } else {
        next.add(symbol);
        toast.success(`${symbol} added to favorites`);
      }
      return next;
    });
  };

  const toggleScreener = () => {
    setIsScreenerActive(prev => {
      const newState = !prev;
      if (newState) {
        toast.success('Market screener started', {
          icon: '🚀',
          duration: 3000
        });
      } else {
        toast.success('Market screener stopped', {
          icon: '⏹️',
          duration: 3000
        });
      }
      return newState;
    });
  };

  return {
    data: filteredData,
    filters,
    setFilters,
    toggleFavorite,
    totalPages,
    resetThresholds,
    isScreenerActive,
    toggleScreener
  };
}