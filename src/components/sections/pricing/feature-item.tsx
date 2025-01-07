import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureItemProps {
  feature: string;
  index: number;
}

export function FeatureItem({ feature, index }: FeatureItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-center gap-3 py-2"
    >
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
        <Check className="w-3 h-3 text-green-500" />
      </div>
      <span className="text-gray-300 text-sm">{feature}</span>
    </motion.li>
  );
}