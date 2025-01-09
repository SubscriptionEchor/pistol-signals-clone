import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Bell, Shield } from 'lucide-react';
import { TELEGRAM_COMMUNITY_LINK } from '@/lib/config';
import { OpenUrl } from '@/lib/utils';
import { SignalCard } from '../dashboard/components/signals/signal-card';

export function TelegramSignals() {
  const data = [{
    "coin": "CRV",
    "symbol": "CRV/USDT",
    "image": "https://d2mmqc3v0skn2o.cloudfront.net/binance/crv.png",
    "signalType": "LONG",
    "timestamp": 1733918460,
    "entry": [
      1.2028
    ],
    "pnl": "80.8",
    "exit": [
      "1.2838",
      "1.3",
      "1.3612"
    ],
    "stop_loss": 0.839,
    "leverage": "20x"
  }]

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
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#4F46E5]/20 via-[#6366F1]/20 to-[#8B5CF6]/20">
                  <feature.icon className="w-6 h-6 text-[#6366F1]" />
                </div>
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
            <button onClick={() => OpenUrl(TELEGRAM_COMMUNITY_LINK)} className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] hover:opacity-90 transition-opacity">
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
          <div className="bg-gradient-to-r from-[#4F46E5]/10 via-[#6366F1]/10 to-[#8B5CF6]/10 absolute inset-0 rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              {data.map((_, index) => (
                <SignalCard key={index} {..._} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}