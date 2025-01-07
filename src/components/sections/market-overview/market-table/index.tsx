import { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchBar } from './search-bar';
import { TableActions } from './table-actions';
import { CategoryFilters } from './category-filters';
import { CryptoRow } from './crypto-row';
import { categories, cryptoData } from './data';

export function MarketTable() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <SearchBar />
        <TableActions />
      </div>

      {/* Categories */}
      <CategoryFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

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
                <CryptoRow key={crypto.id} crypto={crypto} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}