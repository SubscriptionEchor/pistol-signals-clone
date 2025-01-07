import { motion } from 'framer-motion';

export function PricingHeader() {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Simple, Transparent{' '}
        <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
          Pricing
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        Choose the plan that best fits your trading needs. All plans include our core features with varying levels of support and capabilities.
      </motion.p>
    </div>
  );
}