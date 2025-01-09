import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function CTA() {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-[#00D1FF]/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Start scooping out<br />
            gems today.
          </h2>
          
          <p className="text-gray-400 text-lg">
            Join thousands of traders making smarter decisions with AI-powered insights
          </p>
          
          <Button
            onClick={() => navigate('/signin')}
            variant="gradient"
            size="lg"
            className="group"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}