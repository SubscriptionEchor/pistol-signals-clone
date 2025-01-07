import { motion } from 'framer-motion';

export function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
    >
      A simple to-do list & timer that gives you{' '}
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        superpowers
      </span>
    </motion.h1>
  );
}