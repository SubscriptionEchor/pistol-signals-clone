import { motion } from 'framer-motion';
import { Wallet, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Wallet,
    title: '30% of each sale you refer',
    description: "Get 30% of each sale you refer to us. That's more than industry average. Earn up to $40 on each sale!"
  },
  {
    icon: Calendar,
    title: '30 days of Tracking Length',
    description: 'Every user you refer will be valid for 30 days. If anyone buys within this timeframe, you get commission.'
  }
];

export function AffiliateStats() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">{stat.title}</h3>
            </div>
            <p className="text-gray-400">{stat.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}