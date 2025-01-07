import { motion } from 'framer-motion';

export function HeroForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 max-w-md"
    >
      <form className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 min-w-0 px-4 py-3 text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Try for free
        </button>
      </form>
    </motion.div>
  );
}