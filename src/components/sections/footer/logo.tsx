import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function Logo() {
  return (
    <motion.div

      className="flex cursor-pointer items-center gap-2 group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <a href='/'>
        <img
          src="/assets/images/nav-logo.png"
          alt="Logo"
          className="w-auto h-16 md:h-20"
        />
      </a>
    </motion.div>
  );
}
