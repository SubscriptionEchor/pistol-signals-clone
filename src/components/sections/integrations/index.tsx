import { motion } from 'framer-motion';
import { MessageSquare, Zap, Bell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Integrations() {
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
            Multi-Channel Signal Delivery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get instant trading signals through multiple channels - never miss a trading opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Telegram Channel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group lg:col-span-2"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            
            <div className="relative bg-[#111] rounded-xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[#00D1FF]/10">
                  <MessageSquare className="w-6 h-6 text-[#00D1FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Telegram Channel</h3>
                  <p className="text-gray-400">Get signals directly in Telegram</p>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-[#0A0A0A] rounded-lg p-6 border border-[#222] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-[#00D1FF]" />
                  <span className="text-sm font-medium text-[#00D1FF]">New Signal Alert</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">BTC/USDT</span>
                    <span className="text-green-400">Long Position</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Entry</span>
                    <span className="text-white">$48,250 - $48,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target</span>
                    <span className="text-white">$49,800</span>
                  </div>
                </div>
              </div>

              <Button variant="gradient" className="w-full group">
                Join Telegram Channel
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Other Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Web Dashboard */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              
              <div className="relative bg-[#111] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#00D1FF]/10">
                    <Bell className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Web Dashboard</h4>
                    <p className="text-sm text-gray-400">Real-time web interface</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Alerts */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              
              <div className="relative bg-[#111] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#00D1FF]/10">
                    <MessageSquare className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Alerts</h4>
                    <p className="text-sm text-gray-400">Daily signal summaries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              
              <div className="relative bg-[#111] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#00D1FF]/10">
                    <Zap className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Mobile App</h4>
                    <p className="text-sm text-gray-400">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}