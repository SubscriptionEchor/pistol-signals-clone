import { motion } from 'framer-motion';
import { Switch } from './switch';

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

export function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-4 mb-16"
    >
      <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
        Monthly
      </span>
      <Switch checked={isYearly} onCheckedChange={onToggle} />
      <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>
        Yearly
        <span className="ml-1.5 px-2 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full">
          Save 20%
        </span>
      </span>
    </motion.div>
  );
}