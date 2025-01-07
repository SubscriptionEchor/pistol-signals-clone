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
  const { marketData, indexData, dominance } = useUser()

  const marketStats = {
    marketCap: '$3.46T',
    change: '-5.10%',
    fearGreedIndex: 76,
    btcDominance: '55.96%',
    ethDominance: '12.80%'
  };

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

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toFixed(2)}`;
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
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Today's Cryptocurrency Prices by Market Cap</h2>
        {marketData?.length && <p className="text-gray-400">
          The global crypto market cap is ${formatMarketCap(marketData[marketData?.length - 1]?.value)}, a{' '}
          <span className="text-red-500">{calculatePercentageChange(Number(marketData[marketData.length - 2]?.value), Number(marketData[marketData.length - 1]?.value))}%</span> decrease over the last day.{' '}
          {/* <button className="text-blue-400 hover:underline">Read More</button> */}
        </p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Market Stats Cards */}
        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Market Cap</h3>
          </div>
          {marketData?.length && <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{formatMarketCap(marketData[marketData?.length - 1]?.value)}</span>
            <span className="text-red-500 text-sm">{calculatePercentageChange(Number(marketData[marketData.length - 2]?.value), Number(marketData[marketData.length - 1]?.value))}%</span>
          </div>}
        </div>

        {/* Fear & Greed Index */}
        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Fear & Greed</h3>
            {/* <ChevronRight className="text-gray-400" size={20} /> */}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-xl font-bold">{indexData?.score}</span>
            </div>
            <span className="text-green-500">{indexData?.name}</span>
          </div>
        </div>

        {/* Dominance */}
        <div className="bg-white/5 rounded-xl p-5 border border-white/10 col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Dominance</h3>
            {/* <ChevronRight className="text-gray-400" size={20} /> */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">₿</div>
                <span>BTC</span>
              </div>
              <span className="text-xl font-bold">{dominance?.btc_dominance?.toFixed(1)}%</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">Ξ</div>
                <span>ETH</span>
              </div>
              <span className="text-xl font-bold">{dominance?.eth_dominance?.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      {/* <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div> */}

      {/* Market Table */}
      {tableData?.length > 0 && <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                {/* <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">#</th> */}
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 text-nowrap">Name</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400 text-nowrap">Price</th>
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
                  {/* <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-yellow-500">
                      <Star size={16} />
                    </button>
                  </td> */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img src={`${IMAGE_URL}${crypto.symbol?.toLowerCase()}.png`} alt={crypto.symbol} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-auto" />
                      {/* <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center font-bold">
                        {crypto.symbol.charAt(0)}
                      </div> */}
                      <div>
                        <div className="font-semibold">{crypto.name}</div>
                        <div className="text-sm text-gray-400">{crypto.symbol}</div>

                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-nowrap">{formatPrice(crypto.price)}</td>
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
      </div>}

      {/* Table Controls */}
      {/* <div className="flex items-center justify-end gap-4 mt-4">
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400">
          <Filter size={20} />
        </button>
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400">
          <LayoutGrid size={20} />
        </button>
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400">
          <Settings2 size={20} />
        </button>
      </div> */}
    </Section>
  );
}

export function MarketOverview() {
  return (
    <TableProvider>
      <MarketOverviewComponent />
    </TableProvider>
  )
}