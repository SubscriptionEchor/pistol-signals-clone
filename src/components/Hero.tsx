import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background effects remain the same */}
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Hero content remains the same */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            variant="gradient"
            size="lg"
            className="group"
            onClick={() => router.push('/onboarding')}
          >
            <span>Get Started Now</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="secondary"
            size="lg"
          >
            View Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}