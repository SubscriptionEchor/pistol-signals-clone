import { motion } from 'framer-motion';
import { MessageCircle, Zap, TrendingUp, Bell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TELEGRAM_CHANNEL_LINK } from '@/lib/config';
import { OpenUrl } from '@/lib/utils';

export function OneSimpleShortcut() {
  return (
    <section className="relative py-32 px-6 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#00D1FF]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
          style={{ backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Instant Trading Signals
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get real-time trading signals delivered instantly to your dashboard and Telegram
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Signal Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            
            <div className="relative bg-[#111] rounded-xl overflow-hidden border border-[#222]">
              {/* Dashboard Preview */}
              <div className="p-6 space-y-4">
                {/* Latest Signal */}
                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#222] space-y-3">
                  <div className="flex items-center gap-2 text-[#00D1FF]">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">Latest Signal</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">BTC/USDT</span>
                      <span className="text-green-400">Long Position</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Entry</span>
                      <span className="text-white">$48,250 - $48,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Target</span>
                      <span className="text-white">$49,800</span>
                    </div>
                  </div>
                </div>

                {/* Telegram Preview */}
                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#222]">
                  <div className="flex items-center gap-2 text-[#00D1FF]">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Telegram Notification</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    Instant delivery to your Telegram
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#222]">
                  <div className="flex items-center gap-2 text-[#00D1FF]">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Signal Performance</span>
                  </div>
                  <div className="mt-2 text-sm text-green-400">
                    99.2% Accuracy Rate
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Instant Delivery",
                  description: "Receive signals the moment our AI detects profitable opportunities"
                },
                {
                  icon: Bell,
                  title: "Multi-Channel Alerts",
                  description: "Get signals on both dashboard and Telegram for maximum convenience"
                },
                {
                  icon: TrendingUp,
                  title: "Real-time Updates",
                  description: "Stay informed with live market updates and signal modifications"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#111] rounded-lg border border-[#222] hover:border-[#333] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#00D1FF]/10">
                    <feature.icon className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => OpenUrl(TELEGRAM_CHANNEL_LINK)}
              variant="gradient"
              className="group"
            >
              <span>Join Telegram Channel</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}