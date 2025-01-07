import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CurrentPlan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">Current Plan</h2>
      
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4">1 Month</h3>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg mb-4 w-fit">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-sm">Your next bill is $120 on 26 Dec, 2024.</span>
        </div>

        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-2xl font-bold">$120</span>
          <span className="text-gray-400">/month</span>
        </div>

        <div className="flex gap-4">
          <Button variant="gradient">Upgrade</Button>
          <Button variant="secondary">Cancel plan</Button>
        </div>
      </div>

      <p className="text-sm text-gray-400">
        View all plans & features on the{' '}
        <a href="/pricing" className="text-primary hover:text-primary-light transition-colors">
          Pricing
        </a>
        {' '}page.
      </p>
    </motion.div>
  );
}