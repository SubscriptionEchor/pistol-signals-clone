import { motion } from 'framer-motion';
import { Calendar, CreditCard, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function SubscriptionDetails() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Subscription Details</h2>
        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
          Active
        </span>
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        {/* Current Plan */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-400">Plan</p>
              <p className="font-medium">Pro Monthly</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Price</p>
              <p className="font-medium">$120.00/month</p>
            </div>
          </div>
        </div>

        {/* Billing Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <p className="text-gray-400">Next billing date</p>
              </div>
              <p className="font-medium">December 26, 2024</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <p className="text-gray-400">Payment method</p>
              </div>
              <p className="font-medium">USDT (TRC20)</p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-6">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <p className="text-sm text-yellow-500">
            Canceling your subscription will immediately stop your access to premium features at the end of your current billing period.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="gradient"
            onClick={() => navigate('/pricing')}
            className="flex-1"
          >
            Upgrade Plan
          </Button>
          <Button
            variant="secondary"
            className="flex-1 text-red-400 hover:text-red-300"
          >
            Cancel Subscription
          </Button>
        </div>
      </div>
    </motion.div>
  );
}