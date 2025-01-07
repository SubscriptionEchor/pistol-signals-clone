import { motion } from 'framer-motion';
import { Wallet, ArrowUpRight, CreditCard, History } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BalanceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
              <Wallet className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Available Balance</h3>
              <p className="text-sm text-gray-400">Total earnings from referrals</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-3xl font-bold mb-2">$240.00</div>
          <div className="text-sm text-green-400 flex items-center justify-center gap-1">
            <ArrowUpRight className="w-4 h-4" />
            +$60 this month
          </div>
        </div>
        
        <div className="space-y-3">
          <Button variant="gradient" className="w-full flex items-center justify-center gap-2">
            <CreditCard className="w-4 h-4" />
            Withdraw Funds
          </Button>
          <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
            <History className="w-4 h-4" />
            Transaction History
          </Button>
        </div>
      </div>
    </motion.div>
  );
}