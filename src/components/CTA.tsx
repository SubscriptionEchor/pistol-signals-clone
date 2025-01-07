import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        style={{ backgroundSize: '32px 32px' }}
      /> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Trading Smarter?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already using CryptoSignals to
            make data-driven trading decisions.
          </p>
          <button className="px-8 py-3 bg-gradient-primary rounded-full transition-colors">
            Try Now Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
