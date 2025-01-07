import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const signals = [
  {
    title: 'BTC/USDT Long Position',
    entry: '$48,250 - $48,500',
    takeProfit: '$49,800',
    stopLoss: '$47,500'
  },
  {
    title: 'BTC/USDT Long Position',
    entry: '$48,250 - $48,500',
    takeProfit: '$49,800',
    stopLoss: '$47,500'
  },
  {
    title: 'BTC/USDT Long Position',
    entry: '$48,250 - $48,500',
    takeProfit: '$49,800',
    stopLoss: '$47,500'
  }
];

export function SignalPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3366FF]/10 via-[#8B5CF6]/5 to-transparent rounded-3xl blur-xl" />
      <div className="relative bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-white/5">
        {signals.map((signal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/40 rounded-lg p-4 hover:bg-black/50 transition-colors duration-300 group"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1 rounded bg-gradient-to-r from-[#3366FF]/20 to-[#8B5CF6]/20 group-hover:from-[#3366FF]/30 group-hover:to-[#8B5CF6]/30 transition-all duration-300">
                <Zap className="w-4 h-4 text-[#3366FF]" />
              </div>
              <span className="text-sm bg-gradient-to-r from-[#3366FF] to-[#8B5CF6] bg-clip-text text-transparent font-medium">
                Signal Alert
              </span>
            </div>
            <h4 className="font-medium mb-3 group-hover:text-[#3366FF] transition-colors duration-300">
              {signal.title}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Entry</span>
                <span>{signal.entry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Take Profit</span>
                <span className="text-green-400">{signal.takeProfit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Stop Loss</span>
                <span className="text-red-400">{signal.stopLoss}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}