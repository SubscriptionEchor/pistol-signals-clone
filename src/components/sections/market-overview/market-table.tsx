import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, LayoutGrid, Settings2, Search } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'defi', label: '🔥 DeFi' },
  { id: 'nft', label: 'NFTs' },
  { id: 'gaming', label: '🎮 Gaming' },
  { id: 'ai', label: '🤖 AI' }
];

const cryptoData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$98,029.35',
    change1h: '+0.05%',
    change24h: '-1.76%',
    change7d: '+2.39%',
    marketCap: '$1,940.36B',
    volume: '$113.95B',
    supply: '19.79M BTC',
    isPositive1h: true,
    isPositive24h: false,
    isPositive7d: true,
    logo: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$3,677.88',
    change1h: '-1.17%',
    change24h: '-6.10%',
    change7d: '+2.30%',
    marketCap: '$442.98B',
    volume: '$65.74B',
    supply: '120.44M ETH',
    isPositive1h: false,
    isPositive24h: false,
    isPositive7d: true,
    logo: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png'
  },
  {
    id: 3,
    name: 'Solana',
    symbol: 'SOL',
    price: '$147.25',
    change1h: '+2.34%',
    change24h: '+5.67%',
    change7d: '+15.89%',
    marketCap: '$64.32B',
    volume: '$8.91B',
    supply: '437.2M SOL',
    isPositive1h: true,
    isPositive24h: true,
    isPositive7d: true,
    logo: 'https://assets.coingecko.com/coins/images/4128/small/solana.png'
  },
  {
    id: 4,
    name: 'BNB',
    symbol: 'BNB',
    price: '$456.78',
    change1h: '-0.45%',
    change24h: '+1.23%',
    change7d: '-2.78%',
    marketCap: '$69.85B',
    volume: '$12.34B',
    supply: '153.8M BNB',
    isPositive1h: false,
    isPositive24h: true,
    isPositive7d: false,
    logo: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png'
  },
  {
    id: 5,
    name: 'Cardano',
    symbol: 'ADA',
    price: '$0.89',
    change1h: '+1.12%',
    change24h: '+3.45%',
    change7d: '+8.90%',
    marketCap: '$31.45B',
    volume: '$4.56B',
    supply: '35.28B ADA',
    isPositive1h: true,
    isPositive24h: true,
    isPositive7d: true,
    logo: 'https://assets.coingecko.com/coins/images/975/small/cardano.png'
  },
  {
    id: 6,
    name: 'XRP',
    symbol: 'XRP',
    price: '$0.67',
    change1h: '-0.89%',
    change24h: '-2.34%',
    change7d: '+4.56%',
    marketCap: '$36.78B',
    volume: '$5.67B',
    supply: '54.89B XRP',
    isPositive1h: false,
    isPositive24h: false,
    isPositive7d: true,
    logo: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png'
  },
  {
    id: 7,
    name: 'Avalanche',
    symbol: 'AVAX',
    price: '$45.67',
    change1h: '+3.21%',
    change24h: '+7.89%',
    change7d: '+21.34%',
    marketCap: '$16.78B',
    volume: '$3.45B',
    supply: '367.8M AVAX',
    isPositive1h: true,
    isPositive24h: true,
    isPositive7d: true,
    logo: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png'
  },
  {
    id: 8,
    name: 'Polkadot',
    symbol: 'DOT',
    price: '$9.45',
    change1h: '-1.23%',
    change24h: '-4.56%',
    change7d: '+1.23%',
    marketCap: '$12.34B',
    volume: '$2.34B',
    supply: '1.31B DOT',
    isPositive1h: false,
    isPositive24h: false,
    isPositive7d: true,
    logo: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png'
  }
];

export function MarketTable() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search cryptocurrencies..."
            className="w-full sm:w-80 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <Filter size={20} className="text-gray-400" />
          </button>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <LayoutGrid size={20} className="text-gray-400" />
          </button>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <Settings2 size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              activeCategory === category.id
                ? 'bg-gradient-primary text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative group rounded-xl overflow-hidden"
      >
        {/* Animated gradient border */}
        <div className="absolute -inset-[1px] bg-gradient-primary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
        
        <div className="relative bg-white/5 backdrop-blur-sm overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">#</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Name</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Price</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">1h %</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">24h %</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">7d %</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Market Cap</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Volume(24h)</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Supply</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto) => (
                <tr 
                  key={crypto.id} 
                  className="border-b border-white/10 hover:bg-white/[0.07] transition-colors"
                >
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                      <Star size={16} />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={crypto.logo}
                        alt={crypto.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{crypto.name}</div>
                        <div className="text-sm text-gray-400">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold">{crypto.price}</td>
                  <td className={`px-6 py-4 text-right ${crypto.isPositive1h ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change1h}
                  </td>
                  <td className={`px-6 py-4 text-right ${crypto.isPositive24h ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change24h}
                  </td>
                  <td className={`px-6 py-4 text-right ${crypto.isPositive7d ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change7d}
                  </td>
                  <td className="px-6 py-4 text-right">{crypto.marketCap}</td>
                  <td className="px-6 py-4 text-right">{crypto.volume}</td>
                  <td className="px-6 py-4 text-right">{crypto.supply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}