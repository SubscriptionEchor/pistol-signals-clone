import { motion } from 'framer-motion';

interface MarketDominanceProps {
  btcDominance: string;
  ethDominance: string;
}

export function MarketDominance({ btcDominance, ethDominance }: MarketDominanceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/5 rounded-xl p-6 border border-white/10 col-span-2"
    >
      <h3 className="text-lg font-semibold mb-4">Dominance</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">₿</div>
            <span>BTC</span>
          </div>
          <span className="text-xl font-bold">{btcDominance}</span>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">Ξ</div>
            <span>ETH</span>
          </div>
          <span className="text-xl font-bold">{ethDominance}</span>
        </div>
      </div>
    </motion.div>
  );
}