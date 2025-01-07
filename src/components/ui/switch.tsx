import { motion } from 'framer-motion';
import { useState } from 'react';

export function Switch({ enabled, setEnabled }) {

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-gradient-primary' : 'bg-white/10'
        }`}
    >
      <motion.div
        initial={false}
        animate={{ x: enabled ? '24px' : '2px' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
      />
    </button>
  );
}