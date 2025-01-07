import { motion } from 'framer-motion';

interface PriceTagProps {
  price: string;
  period: string;
}

export function PriceTag({ price, period }: PriceTagProps) {
  return (
    <div className="flex items-baseline gap-2 mb-6">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        {price}
      </motion.span>
      <span className="text-gray-400">{period}</span>
    </div>
  );
}