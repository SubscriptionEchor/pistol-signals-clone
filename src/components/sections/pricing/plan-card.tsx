import { motion } from 'framer-motion';
import { Button } from '../../ui/button';
import { PriceTag } from './price-tag';
import { FeatureItem } from './feature-item';
import { Crown } from 'lucide-react';

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export function PlanCard({ 
  name, 
  price, 
  period, 
  description, 
  features,
  isPopular,
  delay = 0 
}: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-300 group-hover:blur-lg ${
        isPopular 
          ? 'bg-gradient-to-r from-purple-500/30 to-emerald-500/30' 
          : 'bg-white/10'
      }`} />

      {/* Card content */}
      <div className={`relative h-full backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 ${
        isPopular 
          ? 'bg-white/10 border border-white/20' 
          : 'bg-white/5 border border-white/10'
      }`}>
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full text-sm font-medium flex items-center gap-1">
            <Crown className="w-4 h-4" />
            Most Popular
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        <PriceTag price={price} period={period} />

        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <FeatureItem key={feature} feature={feature} index={index} />
          ))}
        </ul>

        <Button 
          variant={isPopular ? 'gradient' : 'secondary'}
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}