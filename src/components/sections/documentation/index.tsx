import { motion } from 'framer-motion';
import { FileText, Share2 } from 'lucide-react';

export function Documentation() {
  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '32px 32px' }} 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Share and document.<br />
            Zero writing required.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let our AI handle the documentation while you focus on trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: FileText,
              title: "Auto-documentation",
              description: "AI automatically documents your trading strategies and insights"
            },
            {
              icon: Share2,
              title: "Easy sharing",
              description: "Share trading knowledge with your team in one click"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="p-3 rounded-lg bg-[#00D1FF]/10 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-[#00D1FF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}