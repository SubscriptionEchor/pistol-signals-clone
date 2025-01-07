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

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}