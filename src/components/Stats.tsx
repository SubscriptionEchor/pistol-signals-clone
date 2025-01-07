import { motion } from 'framer-motion';

const stats = [
  { value: '99%', label: 'Signal Accuracy' },
  { value: '24/7', label: 'Market Monitoring' },
  { value: '10ms', label: 'Signal Delivery' },
  { value: '50k+', label: 'Active Traders' }
];

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}