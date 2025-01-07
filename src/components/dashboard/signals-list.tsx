import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, TrendingDown, TrendingUp, Rocket } from 'lucide-react';

const signals = [
  {
    coin: 'Bitcoin',
    symbol: 'BTC',
    type: 'Long',
    timestamp: 'Today, 14:45 UTC',
    entry: {
      values: ['$51,283', '$50,478', '$49,792'],
      icon: TrendingUp,
      iconBackground: 'bg-emerald-500/20',
      iconColor: 'text-emerald-500'
    },
    exit: {
      values: ['$65,792', '$66,890', '$68,990'],
      icon: TrendingDown,
      iconBackground: 'bg-red-500/20',
      iconColor: 'text-red-500'
    },
    stopLoss: '1%',
    leverage: '4x'
  }
];

export function SignalsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {signals.map((signal, index) => (
        <div 
          key={index}
          className="relative group overflow-hidden"
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-[1px] bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          
          <div className="relative bg-[#111] rounded-xl p-6 hover:bg-[#161616] transition-colors duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F7931A]">
                  <img 
                    src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
                    alt="Bitcoin"
                    className="w-full h-full p-1.5"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{signal.coin}</h3>
                  <p className="text-sm text-gray-400">{signal.timestamp}</p>
                </div>
              </div>
              <span className="px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                {signal.type}
              </span>
            </div>

            {/* Entry */}
            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded ${signal.entry.iconBackground}`}>
                  <signal.entry.icon className={`w-5 h-5 ${signal.entry.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Entry</p>
                  <p className="font-medium">{signal.entry.values.join(' / ')}</p>
                </div>
              </div>

              {/* Exit */}
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded ${signal.exit.iconBackground}`}>
                  <signal.exit.icon className={`w-5 h-5 ${signal.exit.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Exit</p>
                  <p className="font-medium">{signal.exit.values.join(' / ')}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                  <TrendingDown className="w-4 h-4" />
                  Stop Loss
                </div>
                <p className="font-medium">{signal.stopLoss}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                  <Rocket className="w-4 h-4" />
                  Leverage
                </div>
                <p className="font-medium">{signal.leverage}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}