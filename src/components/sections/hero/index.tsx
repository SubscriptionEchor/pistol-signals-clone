import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleViewDemo = () => {
    // Scroll to demo section or open demo modal
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3366FF]/10 via-purple-500/5 to-rose-500/10" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(220,119,198,0.1),transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3366FF]/10 border border-[#3366FF]/20 text-[#3366FF] text-sm mb-6"
        >
          <span>Powered by Advanced AI</span>
          <ArrowRight size={16} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
        >
          AI-Powered Signals,{' '}
          <span className="bg-gradient-to-r from-[#3366FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
            Simplifying Trading
          </span>
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
          <Button
            variant="gradient"
            onClick={handleGetStarted}
            className="group inline-flex items-center justify-center"
          >
            <span>Get Started Now</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="secondary"
            onClick={handleViewDemo}
          >
            View Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}