import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AnimatedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative inline-flex items-center mb-6"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse" />
      {/* Badge container */}
      <div className="relative px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10 bg-black/50">
        {/* Animated gradient text */}
        <motion.div
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-sm font-medium bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          AI-Powered Analysis | Next-Gen Trading Signals
        </motion.div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-emerald-500/10 blur-sm opacity-50" />
      </div>
    </motion.div>
  );
}