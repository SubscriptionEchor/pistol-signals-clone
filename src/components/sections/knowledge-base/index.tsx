import { motion } from 'framer-motion';
import { Search, ArrowRight, Command } from 'lucide-react';

export function KnowledgeBase() {
  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-[#222]/50 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect your team's<br />
            knowledge
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Share insights and make better trading decisions as a team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Search Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#111] rounded-xl p-6 border border-[#222]">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Ask anything..."
                  className="w-full bg-transparent border-none focus:outline-none text-gray-400 placeholder-gray-600"
                />
                <div className="flex items-center gap-1 px-2 py-1 bg-[#222] rounded text-xs text-gray-500">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-black rounded-lg border border-[#222] hover:border-[#333] transition-colors">
                  <p className="text-gray-500 text-sm">How do I analyze market trends?</p>
                </div>
                <div className="p-4 bg-black rounded-lg border border-[#222] hover:border-[#333] transition-colors">
                  <p className="text-gray-500 text-sm">What are the best trading indicators?</p>
                </div>
                <div className="p-4 bg-black rounded-lg border border-[#222] hover:border-[#333] transition-colors">
                  <p className="text-gray-500 text-sm">How to set stop losses effectively?</p>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-[#111] rounded-xl p-6 border border-[#222]">
                <h4 className="text-gray-400 font-medium mb-2">Quick Access</h4>
                <p className="text-gray-500 text-sm">Access trading insights instantly with keyboard shortcuts</p>
              </div>
              <div className="bg-[#111] rounded-xl p-6 border border-[#222]">
                <h4 className="text-gray-400 font-medium mb-2">Team Sync</h4>
                <p className="text-gray-500 text-sm">Keep your team aligned with shared knowledge base</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#111] rounded-xl p-6 border border-[#222]">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Share knowledge effortlessly</h3>
              <p className="text-gray-500 mb-6">
                Our AI assistant helps your team document and share trading knowledge seamlessly. Get instant access to market insights and team expertise.
              </p>
              <button className="flex items-center gap-2 text-[#00D1FF] hover:text-[#47EBEB] transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                'Real-time market insights sharing',
                'Collaborative trading strategies',
                'Automated documentation',
                'Smart search and filtering'
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-[#222] hover:border-[#333] transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00D1FF]" />
                  <span className="text-gray-400">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}