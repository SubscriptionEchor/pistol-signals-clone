import { motion } from 'framer-motion';
import type { TradeConfidenceValue } from '../types';

interface ConfidenceLabelProps {
  confidence: TradeConfidenceValue;
}

export function ConfidenceLabel({ confidence }: ConfidenceLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="text-center"
    >
      <div
        className="text-lg flex font-bold mt-3"
      // style={{ color: confidence.color }}
      >
        {confidence.label}:
        <p className='text-white-500 rounded bg-white/20 ms-2 px-2'>{confidence?.score}</p>
      </div>
    </motion.div>
  );
}