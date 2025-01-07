import { motion } from 'framer-motion';

export function AnimatedGradient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 overflow-hidden -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-emerald-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '32px 32px' }} 
      />
    </motion.div>
  );
}