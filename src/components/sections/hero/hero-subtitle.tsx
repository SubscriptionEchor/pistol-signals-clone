import { motion } from 'framer-motion';

export function HeroSubtitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mt-6 space-y-1 text-xl text-gray-400"
    >
      <p>Prioritize what matters,</p>
      <p>Remove distraction,</p>
      <p className="text-purple-400">and get it done</p>
      <p className="text-emerald-400">in flow state.</p>
    </motion.div>
  );
}