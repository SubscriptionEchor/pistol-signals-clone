import { DashboardLayout } from '../dashboard/layout';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { ScreenerTable } from './components/screener-table';
import { useScreenerData } from './hooks/useScreenerData';

export function Screener() {
  const {
    data,
    filters,
    setFilters,
    toggleFavorite,
    totalPages,
    resetThresholds,
    isScreenerActive,
    toggleScreener
  } = useScreenerData();

  const timeframes = ['5m', '15m', '30m', '1h', '4h'];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Market Screener</h1>
          <p className="text-gray-400">Monitor market movements and discover trading opportunities</p>
        </div>

        {/* Controls Section */}
        <div className="bg-[#111] rounded-xl p-4 md:p-6 mb-8 border border-white/10">
          <div className="space-y-6">
            {/* Thresholds */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Price Change Thresholds</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {timeframes.map((tf) => (
                  <div key={tf} className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 min-w-[40px]">{tf}</span>
                    <div className="flex items-center gap-1 flex-1">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={filters.thresholds[tf]}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          thresholds: {
                            ...prev.thresholds,
                            [tf]: Number(e.target.value)
                          }
                        }))}
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
                onClick={toggleScreener}
                className="w-full md:w-auto"
              >
                {isScreenerActive ? 'Stop Screener' : 'Start Screener'}
              </Button>

              <Button
                variant={filters.onlyFavorites ? 'gradient' : 'secondary'}
                onClick={() => setFilters(prev => ({ ...prev, onlyFavorites: !prev.onlyFavorites }))}
                className="w-full md:w-auto"
              >
                <Star className="w-4 h-4 mr-2" />
                {filters.onlyFavorites ? 'Show All' : 'Show Favorites'}
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {isScreenerActive && (
          <div className="space-y-4">
            {/* Timeframe Selection */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
              {timeframes.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setFilters(prev => ({ ...prev, timeInterval: tf }))}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    filters.timeInterval === tf
                      ? 'bg-gradient-primary text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* Table */}
            <ScreenerTable
              data={data}
              timeInterval={filters.timeInterval}
              onToggleFavorite={toggleFavorite}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}