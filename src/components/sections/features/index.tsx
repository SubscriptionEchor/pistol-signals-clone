import { motion } from 'framer-motion';
import { Brain, Target, BarChart2, Shield, Zap, LineChart } from 'lucide-react';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze market patterns 24/7',
    iconColor: 'text-purple-500'
  },
  {
    icon: Target,
    title: 'Precision Signals',
    description: 'High-probability trade signals with specific entry and exit points',
    iconColor: 'text-blue-500'
  },
  {
    icon: BarChart2,
    title: 'Real-time Updates',
    description: 'Instant notifications for market movements and trading opportunities',
    iconColor: 'text-emerald-500'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Built-in risk assessment and position sizing recommendations',
    iconColor: 'text-rose-500'
  },
  {
    icon: Zap,
    title: 'Quick Execution',
    description: 'Fast signal delivery to help you catch the best trading moments',
    iconColor: 'text-amber-500'
  },
  {
    icon: LineChart,
    title: 'Market Insights',
    description: 'Detailed market analysis and trend predictions',
    iconColor: 'text-indigo-500'
  }
];

export function Features() {
  return (
    <section className="relative py-32 px-6" id="features">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" style={{ backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pistol Signals
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Our platform combines advanced AI with real-time market data to provide you with accurate trading signals
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}