import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
    >
      <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#3366FF] hover:bg-blue-600 rounded-xl text-lg font-medium transition-colors">
        <span>Start Trading Now</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
      <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-lg font-medium transition-colors">
        View Live Signals
      </button>
    </motion.div>
  );
}