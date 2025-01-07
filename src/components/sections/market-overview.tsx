import { useContext, useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Star,
  Info,
  Filter,
  LayoutGrid,
  Settings2
} from 'lucide-react';
import { Section } from '../ui/section';
import { IMAGE_URL } from '@/lib/config';
import { useUser } from '@/lib/context/user';
import MarketStats from '../dashboard/market-overview/market-stats';
import { calculatePercentageChange, formatMarketCap } from '@/lib/utils';
import { commonApi } from '@/services/api/common';
import { TableContext, TableProvider } from '@/lib/context/tableContext/table-context';
import { marketApi } from '@/services/api';

function MarketOverviewComponent() {
  const { tableData } = useContext(TableContext);
  const { marketData, indexData, dominance } = useUser();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  const formatPercent = (percent) => {
    if (!percent && percent !== 0) return 'N/A';
    return `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
  };

  const formatVolume = (volume) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(volume);
  };

  return (
    <Section id="market" className="bg-black/50">
      {/* ... Header and Stats sections remain the same ... */}

      {/* Market Table */}
      {tableData?.length > 0 && (
        <div className="w-full overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 text-nowrap">Name</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">Price History</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">1h %</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">24h %</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">7d %</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">Market Cap</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">Volume(24h)</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">Circulating Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((crypto) => (
                    <tr key={crypto.symbol} className="border-b border-white/10 hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img 
                            src={`${IMAGE_URL}${crypto.symbol?.toLowerCase()}.png`} 
                            alt={crypto.symbol} 
                            className="w-8 h-8" 
                            onError={(e) => {
                              e.target.src = `${IMAGE_URL}btc.png`;
                              e.target.onerror = null;
                            }} 
                          />
                          <div>
                            <div className="font-semibold">{crypto.name}</div>
                            <div className="text-sm text-gray-400">{crypto.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="space-y-1">
                          <div className="font-semibold">{formatPrice(crypto.priceHistory?.current)}</div>
                          <div className="text-sm text-gray-400">{formatPrice(crypto.priceHistory?.past1)}</div>
                          <div className="text-sm text-gray-400">{formatPrice(crypto.priceHistory?.past2)}</div>
                          <div className="text-sm text-gray-400">{formatPrice(crypto.priceHistory?.past3)}</div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-right text-nowrap ${crypto.price1hChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {formatPercent(crypto.price1hChangePercent)}
                      </td>
                      <td className={`px-6 py-4 text-right text-nowrap ${crypto.price24hChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {formatPercent(crypto.price24hChangePercent)}
                      </td>
                      <td className={`px-6 py-4 text-right text-nowrap ${crypto.price7dChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {formatPercent(crypto.price7dChangePercent)}
                      </td>
                      <td className="px-6 py-4 text-right text-nowrap">{crypto.marketCap?.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right text-nowrap">{crypto.volume24h?.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right text-nowrap">{new Intl.NumberFormat('en-US').format(crypto.circulatingSupply)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

export function MarketOverview() {
  return (
    <TableProvider>
      <MarketOverviewComponent />
    </TableProvider>
  );
}