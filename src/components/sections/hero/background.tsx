import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-black to-emerald-500/20" />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          style={{ 
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </motion.div>
    </div>
  );
}