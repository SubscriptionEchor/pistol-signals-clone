import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { GradientText } from '../ui/gradient-text';
import { Section } from '../ui/section';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate()
  return (
    <Section className="pt-32 pb-20 overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-end/5 to-primary/10" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      <div className="text-center">
        <AnimatedBadge />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
        >
          AI-Driven Trading,{' '}
          <GradientText>Giving you the Edge</GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Let AI handle the complexity of technical analysis—receive tailored signals and make informed trading decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={() => navigate('/signin')} variant="gradient" className="group flex items-center gap-2">
            Get Started Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          {/* <a href='#how-it-works'>
            <Button variant="secondary">View Demo</Button>
          </a> */}
        </motion.div>
      </div>
    </Section>
  );
}