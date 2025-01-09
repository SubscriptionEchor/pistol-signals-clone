import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-[#00D1FF]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
          style={{ backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
            <span className="text-sm text-gray-300">AI-Powered Trading Signals</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Your AI Trading Assistant<br />
          <span className="text-[#00D1FF]">
            Making Smarter Decisions
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Get instant access to AI-powered trading signals, real-time market analysis, and automated alerts - all in one place.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            onClick={() => navigate('/signin')} 
            variant="gradient"
            size="lg"
            className="group"
          >
            Start Trading Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12"
        >
          {[
            { label: 'Signal Accuracy', value: '99.2%' },
            { label: 'Active Users', value: '50K+' },
            { label: 'Daily Signals', value: '100+' },
            { label: 'Response Time', value: '<10ms' }
          ].map((stat, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-[#00D1FF]">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}