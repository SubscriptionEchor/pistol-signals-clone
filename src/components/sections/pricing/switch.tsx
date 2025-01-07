import * as React from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: () => void;
}

export function Switch({ checked, onCheckedChange }: SwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onCheckedChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        checked ? 'bg-gradient-to-r from-purple-500 to-emerald-500' : 'bg-white/10'
      }`}
    >
      <motion.span
        layout
        className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
        animate={{ x: checked ? '24px' : '2px' }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}