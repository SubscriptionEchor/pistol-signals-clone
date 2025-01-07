import { motion } from 'framer-motion';

export function VersionBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex items-center justify-center gap-6 mt-16 text-sm font-medium text-gray-400"
    >
      <span className="px-3 py-1.5 bg-white/5 rounded-full">v2.4.0</span>
      <span>•</span>
      <span>Real-time signals</span>
      <span>•</span>
      <span>24/7 monitoring</span>
    </motion.div>
  );
}