import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/button';
import { GradientText } from '../../ui/gradient-text';
import { Section } from '../../ui/section';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { useNavigate } from 'react-router-dom';
import { Particles } from '@/components/ui/particles';
import { Globe } from '@/components/ui/globe';

export function Hero() {
  const navigate = useNavigate()
  return (
    <Section className="min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden relative px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <Globe />
      <Particles />

      {/* Background Image with reduced opacity */}
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url(/assets/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Gradient Overlays with reduced opacity */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-[#00FFFF]/2 to-[#00D1FF]/5" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,209,255,0.1),transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="w-full max-w-[90rem] mx-auto text-center relative z-10">
        <AnimatedBadge />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight px-4"
        >
          AI-Driven Trading,{' '}
          <GradientText>Giving you the Edge</GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Let AI handle the complexity of technical analysis—receive tailored signals and make informed trading decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <Button 
            onClick={() => navigate('/signin')} 
            variant="gradient" 
            className="w-full sm:w-auto group"
          >
            Get Started Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}