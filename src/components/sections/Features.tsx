import { Brain, Target, BarChart2, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'Data-Driven Insights',
    description: 'CopyMulti-factor analysis tracking price action, volume, and market structure'
  },
  {
    icon: Target,
    title: 'Real-time Alerts',
    description: 'Instant notifications for significant market movements and potential setups'
  },
  {
    icon: BarChart2,
    title: 'Market Overview',
    description: 'Comprehensive market data including volume analysis and price movement tracking'
  },
  {
    icon: Shield,
    title: 'Educational Resources',
    description: 'Access to market education and trading tools to enhance your knowledge'
  },
  {
    icon: Zap,
    title: 'Advanced Scanner',
    description: 'Customize screening parameters based on your trading preferences'
  },
  {
    icon: Brain,
    title: 'Multi-Channel Delivery',
    description: 'Access signals through our platform and get instant Telegram notifications'
  }
];

export function Features() {
  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Pistol Signals?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Our platform combines data-driven analysis with real-time market monitoring to help inform your trading decisions.
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