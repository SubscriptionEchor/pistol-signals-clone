import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AffiliateHero() {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Gift className="w-4 h-4 text-purple-400" />
            <span className="text-sm">Earn up to $1000/month</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Share the Success,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Multiply Your Income
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our affiliate program and earn 30% commission on every successful referral.
            The more you share, the more you earn!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="gradient" size="lg" className="group">
              <span>Start Earning Now</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href='#how-it-works'>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}