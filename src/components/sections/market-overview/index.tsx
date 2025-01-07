import { Section } from '../../ui/section';
import { MarketStats } from './market-stats';
import { MarketTable } from './market-table';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export function MarketOverview() {
  return (
    <Section id="market" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '32px 32px' }} 
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Today's Cryptocurrency{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Market Overview
            </span>
          </h2>
          <div className="flex items-start gap-2 text-gray-400">
            <Info size={20} className="flex-shrink-0 mt-1" />
            <p className="text-sm md:text-base">
              The global crypto market cap is $3.46T, a{' '}
              <span className="text-red-500">5.10%</span> decrease over the last day.{' '}
              <button className="text-primary hover:text-primary-light transition-colors">
                Read More
              </button>
            </p>
          </div>
        </motion.div>

        <MarketStats />
        <MarketTable />
      </div>
    </Section>
  );
}