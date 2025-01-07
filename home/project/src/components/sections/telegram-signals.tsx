import { Section } from '../ui/section';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Bell, Shield } from 'lucide-react';

export function TelegramSignals() {
  return (
    <Section className="bg-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Get Instant Signals via Telegram
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Never miss a trading opportunity with our real-time Telegram signals. Our AI-powered system delivers accurate trading signals directly to your phone.
          </p>
          
          <div className="space-y-6 mb-8">
            {[
              {
                icon: Zap,
                title: "Instant Notifications",
                description: "Receive signals the moment our AI detects profitable opportunities"
              },
              {
                icon: MessageSquare,
                title: "Detailed Analysis",
                description: "Each signal includes entry points, take-profit levels, and stop-loss recommendations"
              },
              {
                icon: Bell,
                title: "24/7 Alerts",
                description: "Round-the-clock monitoring and instant alerts for market movements"
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Clear position sizing and risk parameters with every signal"
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <feature.icon size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium bg-gradient-primary hover:opacity-90 transition-opacity">
              <MessageSquare className="w-5 h-5" />
              <span>Join Telegram Channel</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-primary/10 absolute inset-0 rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={16} className="text-primary" />
                    <span className="text-sm text-primary">Signal Alert</span>
                  </div>
                  <h4 className="font-semibold mb-2">BTC/USDT Long Position</h4>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p>Entry: $48,250 - $48,500</p>
                    <p>Take Profit: $49,800</p>
                    <p>Stop Loss: $47,500</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}