import { TrendingUp, Activity, Clock, Users } from 'lucide-react';
import { StatCard } from './stat-card';

const stats = [
  {
    title: 'Market Cap',
    value: '$3.46T',
    change: '-5.10%',
    icon: TrendingUp,
    isPositive: false
  },
  {
    title: 'Fear & Greed',
    value: '76',
    subtext: 'Greed',
    icon: Activity,
    isPositive: true
  },
  {
    title: '24h Volume',
    value: '$198.25B',
    change: '+12.34%',
    icon: Clock,
    isPositive: true
  },
  {
    title: 'Active Traders',
    value: '2.3M',
    change: '+8.45%',
    icon: Users,
    isPositive: true
  }
];

export function MarketStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.title}
          {...stat}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}