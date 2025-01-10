import { motion } from 'framer-motion';
import { LineChart, TrendingUp, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function CryptoSignals() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/assets/images/hero-bg.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-[#00D1FF]/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Crypto Signals
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get precise trading signals for major cryptocurrencies with entry points, targets, and stop-losses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Signal Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            
            <div className="relative bg-[#111] rounded-xl p-6 border border-[#222]">
              {/* Signal Example */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#00D1FF]" />
                  <span className="text-[#00D1FF] font-medium">Latest Signal</span>
                </div>

                {/* BTC Signal */}
                <div className="bg-black p-4 rounded-lg border border-[#222]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src="/bitcoin-logo.svg" alt="BTC" className="w-6 h-6" />
                      <span className="font-medium">BTC/USDT</span>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      LONG
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Zone</span>
                      <span>$48,200 - $48,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Take Profit</span>
                      <span className="text-green-400">$52,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stop Loss</span>
                      <span className="text-red-400">$46,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Leverage</span>
                      <span>5x</span>
                    </div>
                  </div>
                </div>

                {/* Signal Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black p-4 rounded-lg border border-[#222]">
                    <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                    <div className="text-xl font-bold text-green-400">99.2%</div>
                  </div>
                  <div className="bg-black p-4 rounded-lg border border-[#222]">
                    <div className="text-sm text-gray-400 mb-1">Avg. Profit</div>
                    <div className="text-xl font-bold">45.6%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: TrendingUp,
                title: "Spot & Futures Signals",
                description: "Get signals for both spot trading and futures with detailed entry and exit points"
              },
              {
                icon: Clock,
                title: "24/7 Signal Generation",
                description: "Our AI monitors the market round the clock to identify profitable opportunities"
              },
              {
                icon: LineChart,
                title: "Multi-Timeframe Analysis",
                description: "Signals based on analysis across multiple timeframes for higher accuracy"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-[#111] rounded-lg border border-[#222] hover:border-[#333] transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#00D1FF]/10">
                  <feature.icon className="w-5 h-5 text-[#00D1FF]" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}

            <Button
              onClick={() => navigate('/signin')}
              variant="gradient"
              className="w-full sm:w-auto"
            >
              Get Trading Signals
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}