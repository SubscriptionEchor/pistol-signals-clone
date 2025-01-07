import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  isPositive?: boolean;
  delay?: number;
}

export function StatCard({ title, value, change, icon: Icon, isPositive, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-[1px] bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Icon size={18} className="text-white" />
          </div>
          <span className="text-sm text-gray-400">{title}</span>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{value}</span>
          {change && (
            <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}