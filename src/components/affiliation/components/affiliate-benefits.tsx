import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  'Instant Approval',
  'Get Recurring Income',
  'High Accuracy Signals',
  'New Signals Every Day'
];

export function AffiliateBenefits() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Why join us?</h2>
        <p className="text-gray-400">
          Because, you become our partner. We handle the trading signals, support and everything. 
          You earn passive money by promoting us.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-500" />
            </div>
            <span className="text-gray-300">{benefit}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}