import { motion } from 'framer-motion';

export function HistoryHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h1 className="text-3xl font-bold mb-2">Signals History</h1>
      <p className="text-gray-400">
        Discover daily trading signals and stay ahead in the market with expertly AI curated data.
      </p>
    </motion.div>
  );
}