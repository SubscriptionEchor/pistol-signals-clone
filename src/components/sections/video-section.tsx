import { Section } from '../ui/section';
import { GradientText } from '../ui/gradient-text';
import { motion } from 'framer-motion';

export function VideoSection() {
  return (
    <Section className="overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          See <GradientText>Pistol Signals</GradientText> in Action
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Watch how our AI-powered platform delivers accurate trading signals in real-time
        </motion.p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white/5"
      >
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/Ab7tRyN62yI"
            title="Pistol Signals Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
          />
        </div>
      </motion.div>
    </Section>
  );
}