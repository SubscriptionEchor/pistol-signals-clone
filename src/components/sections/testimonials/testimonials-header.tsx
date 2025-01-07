import { motion } from 'framer-motion';

export function TestimonialsHeader() {
  return (
    <div id="reviews" className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Join Pistol Signal's community
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg"
      >
        See what Traders are saying about Pistol Signal's
      </motion.p>
    </div>
  );
}