import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  "Real-time market analysis",
  "AI-powered trading signals",
  "Advanced risk management",
  "24/7 expert support",
  "Custom alert settings",
  "Priority signal delivery"
];

export function FeatureList() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 gap-4"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-2"
        >
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <Check className="w-3 h-3 text-green-500" />
          </div>
          <span className="text-sm text-gray-300">{feature}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}