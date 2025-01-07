import { motion } from 'framer-motion';
import { Users, DollarSign, ArrowUpRight } from 'lucide-react';

const stats = [
  {
    label: 'Total Referrals',
    value: '24',
    change: '+3 this month',
    icon: Users,
    color: 'blue'
  },
  {
    label: 'Total Earnings',
    value: '$1,200',
    change: '+$150 this month',
    icon: DollarSign,
    color: 'green'
  }
];

export function ReferralStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-${stat.color}-500/20 rounded-lg`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
              </div>
              <div className="text-sm text-green-400 flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4" />
                {stat.change}
              </div>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}