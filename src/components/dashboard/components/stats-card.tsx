import { motion } from 'framer-motion';
import { GradientCard } from '@/components/ui/gradient-card';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function StatsCard({ title, value, change, isPositive }: StatsCardProps) {
  return (
    <GradientCard>
      <div className="p-6">
        <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{value}</span>
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>
      </div>
    </GradientCard>
  );
}