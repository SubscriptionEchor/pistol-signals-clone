import { motion } from 'framer-motion';
import { GradientCard } from '@/components/ui/gradient-card';
import { affiliateStats } from '@/lib/data/affiliate-stats';

export function AffiliateStats() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Program Statistics</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join our thriving community of successful affiliates and start earning today
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {affiliateStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GradientCard>
              <div className="p-6">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                    <stat.icon className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                
                {/* Stats */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </div>
                  </div>
                  <div className="font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </div>
            </GradientCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}