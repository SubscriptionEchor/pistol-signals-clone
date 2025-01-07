import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-2 group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="relative p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </div>
      <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        Pistol Signals
      </span>
    </motion.div>
  );
}