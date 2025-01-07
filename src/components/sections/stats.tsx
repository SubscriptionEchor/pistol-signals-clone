import { motion } from 'framer-motion';
import { stats } from '@/lib/constants/stats';
import { Section } from '../ui/section';
import { GradientText } from '../ui/gradient-text';

export function Stats() {
  return (
    <Section className="bg-white/5">
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
            <GradientText className="text-3xl font-bold mb-2">
              {stat.value}
            </GradientText>
            <p className="text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}