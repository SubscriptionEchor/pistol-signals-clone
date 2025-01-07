import { motion } from 'framer-motion';
import { HeroTitle } from './hero-title';
import { HeroSubtitle } from './hero-subtitle';
import { HeroForm } from './hero-form';
import { HeroProductBadge } from './hero-product-badge';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <HeroTitle />
          <HeroSubtitle />
          <HeroForm />
          <HeroProductBadge />
        </div>
        
        <div className="hidden lg:block lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="App screenshot"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}