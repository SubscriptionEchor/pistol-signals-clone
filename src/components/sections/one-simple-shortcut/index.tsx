import { motion } from 'framer-motion';
import { Command, Zap, TrendingUp, Bell } from 'lucide-react';

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
            Access real-time trading signals and market insights with a single command
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Signal Command Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            
            <div className="relative bg-[#111] rounded-xl overflow-hidden border border-[#222]">
              {/* Command Header */}
              <div className="p-4 border-b border-[#222] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Command className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Quick Access</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-[#222] rounded text-xs text-gray-500">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>
              
              {/* Signal Content */}
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
                      <span className="text-white">$48,250</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Target</span>
                      <span className="text-white">$49,800</span>
                    </div>
                  </div>
                </div>

                {/* Market Analysis */}
                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#222]">
                  <div className="flex items-center gap-2 text-[#00D1FF]">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Market Analysis</span>
                  </div>
                </div>

                {/* Portfolio Overview */}
                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#222]">
                  <div className="flex items-center gap-2 text-[#00D1FF]">
                    <Bell className="w-4 h-4" />
                    <span className="text-sm font-medium">Signal Alerts</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Keyboard Shortcuts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { shortcut: ['⌘', 'K'], action: 'View Latest Signals', description: 'Access the most recent trading signals' },
              { shortcut: ['⌘', 'J'], action: 'Market Analysis', description: 'Quick market trend analysis' },
              { shortcut: ['⌘', 'L'], action: 'Signal Alerts', description: 'Manage your signal notifications' }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                <div className="relative flex items-center justify-between p-4 bg-[#111] rounded-lg border border-[#222] hover:border-[#333] transition-colors">
                  <div className="space-y-1">
                    <span className="text-gray-200 font-medium">{item.action}</span>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.shortcut.map((key, keyIndex) => (
                      <kbd 
                        key={keyIndex}
                        className="px-2 py-1 bg-[#0A0A0A] rounded text-sm text-gray-400 border border-[#222]"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}