import { Brain, Target, BarChart2, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze market patterns 24/7'
  },
  {
    icon: Target,
    title: 'Precision Signals',
    description: 'High-probability trade signals with specific entry and exit points'
  },
  {
    icon: BarChart2,
    title: 'Real-time Updates',
    description: 'Instant notifications for market movements and trading opportunities'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Built-in risk assessment and position sizing recommendations'
  },
  {
    icon: Zap,
    title: 'Quick Execution',
    description: 'Fast signal delivery to help you catch the best trading moments'
  },
  {
    icon: Brain,
    title: 'Market Insights',
    description: 'Detailed market analysis and trend predictions'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose CryptoSignals?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform combines advanced AI with real-time market data to provide you with accurate trading signals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}