import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../../ui/button';

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
  delay?: number;
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  isPopular,
  cta,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Gradient border effect */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-300 group-hover:blur-lg ${
          isPopular
            ? 'bg-gradient-to-r from-purple-500/30 to-emerald-500/30'
            : 'bg-white/10'
        }`}
      />

      {/* Card content */}
      <div
        className={`relative h-full backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 ${
          isPopular
            ? 'bg-white/10 border border-white/20'
            : 'bg-white/5 border border-white/10'
        }`}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full text-sm font-medium">
            Most Popular
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400">{period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: delay + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Button
          variant="gradient"
          className="w-full"
        >
          {cta}
        </Button>
      </div>
    </motion.div>
  );
}