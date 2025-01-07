import { motion } from 'framer-motion';
import { Users, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AffiliateHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      <div className="flex items-center justify-center gap-3">
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
          <Gift className="w-6 h-6 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold">Affiliation Program</h1>
      </div>
      
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Make 30% from each sale by becoming our partner.
      </p>
      
      <p className="text-gray-400">
        Our AI will create trading signals, you make money! Join our affiliate program today and earn 
        30% of each successful subscription you refer to us.
      </p>

      <Button variant="gradient" size="lg" className="mx-auto">
        Become an Affiliate
      </Button>
    </motion.div>
  );
}