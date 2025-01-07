import { motion } from 'framer-motion';
import { TrendingUp, Activity, Clock, Users } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    label: 'Market Cap',
    value: '$3.46T',
    change: '-5.10%',
    changeType: 'negative'
  },
  {
    icon: Activity,
    label: 'Fear & Greed',
    value: '76',
    subtext: 'Greed',
    changeType: 'positive'
  },
  {
    icon: Clock,
    label: '24h Volume',
    value: '$198.25B',
    change: '+12.34%',
    changeType: 'positive'
  },
  {
    icon: Users,
    label: 'Active Traders',
    value: '2.3M',
    change: '+8.45%',
    changeType: 'positive'
  }
];

export function MarketStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-[1px] bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <stat.icon size={18} className="text-white" />
              </div>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              {stat.change && (
                <span className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              )}
              {stat.subtext && (
                <span className="text-sm text-green-500">{stat.subtext}</span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}