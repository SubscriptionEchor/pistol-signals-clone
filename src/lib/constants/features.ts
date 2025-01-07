import { Brain, Target, BarChart2, Shield, Zap } from 'lucide-react';

export const features = [
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
] as const;