import { Brain, Target, BarChart2, Shield, Zap, LineChart, Timer, ArrowRight } from 'lucide-react';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Track market analysis time and get AI-powered insights automatically.',
    gradient: 'bg-gradient-to-br from-purple-500/40 to-pink-500/40',
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            <span className="text-sm">Analyze BTC/USD</span>
          </div>
          <span className="text-amber-400">+00:02:45</span>
        </div>
        <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-amber-400/70 rounded-full" />
        </div>
        <div className="flex justify-between text-xs text-white/60">
          <span>Est: 4h 30min</span>
          <span>Done: 3h 15min</span>
        </div>
      </div>
    )
  },
  {
    icon: Target,
    title: 'Precision Signals',
    description: 'Get specific entry and exit points with detailed parameters.',
    gradient: 'bg-gradient-to-br from-blue-500/40 to-cyan-500/40',
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            <span className="text-sm">Signal Parameters</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Entry</span>
            <span className="text-green-400">$48,250</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Stop Loss</span>
            <span className="text-red-400">$47,800</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: BarChart2,
    title: 'Real-time Updates',
    description: 'Schedule signal updates exactly when you want them.',
    gradient: 'bg-gradient-to-br from-emerald-500/40 to-teal-500/40',
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4" />
            <span className="text-sm">Update Schedule</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-8 bg-black/20 rounded-lg flex items-center px-3">
            <span className="text-sm text-white/70">Every 15 minutes</span>
          </div>
          <button className="h-8 px-3 bg-emerald-500/20 rounded-lg text-emerald-400 text-sm">
            Set
          </button>
        </div>
      </div>
    )
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Create and organize your risk parameters into lists.',
    gradient: 'bg-gradient-to-br from-violet-500/40 to-purple-500/40',
    preview: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-white/90 mb-3">
          <Shield className="h-4 w-4" />
          <span className="text-sm">Risk Levels</span>
        </div>
        {['Conservative', 'Moderate', 'Aggressive'].map((level, i) => (
          <div key={level} className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-green-400' : i === 1 ? 'bg-yellow-400' : 'bg-red-400'}`} />
            <span className="text-sm text-white/70">{level}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    icon: Zap,
    title: 'Quick Execution',
    description: 'Lightning-fast signal delivery with automated execution.',
    gradient: 'bg-gradient-to-br from-rose-500/40 to-pink-500/40',
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span className="text-sm">Auto-Execute</span>
          </div>
          <div className="h-5 w-9 bg-rose-500/20 rounded-full relative">
            <div className="absolute right-1 top-1/2 -translate-y-1/2 h-3 w-3 bg-rose-400 rounded-full" />
          </div>
        </div>
        <div className="text-xs text-white/60">
          Average execution time: 0.23s
        </div>
      </div>
    )
  },
  {
    icon: LineChart,
    title: 'Market Insights',
    description: 'Track market trends with customizable time intervals.',
    gradient: 'bg-gradient-to-br from-amber-500/40 to-orange-500/40',
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            <span className="text-sm">Trend Analysis</span>
          </div>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="h-12 flex items-end gap-1">
          {[40, 65, 55, 70, 85, 75, 90].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-amber-400/40 rounded-sm"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    )
  }
];

export function FeaturesGrid() {
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