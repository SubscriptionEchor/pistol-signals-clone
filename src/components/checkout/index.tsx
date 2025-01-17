import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, ArrowRight, AlertCircle, ArrowLeft, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { ROUTE_NAMES } from '@/routes/routenames';

export function SubscriptionCheckout({ details, isProcessing }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const plan = details;

  const paymentDetails = {
    contractAddress: '0x935f51628d80b623eaab3b655ac64be5c8383a17',
    network: 'BNB',
    bscscanUrl: 'https://testnet.bscscan.com/token/0x935f51628d80b623eaab3b655ac64be5c8383a17'
  };


  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Address copied to clipboard');
  };


  if (!plan) {
    navigate(ROUTE_NAMES.SUBSCRIPTION);
    return null;
  }


  return (
    <div className="min-h-screen bg-black text-white">

      <main className="max-w-2xl mx-auto p-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Plan Summary */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-gray-400 font-bold">
              You selected the {plan.name} plan at ${plan.price}/{plan.period}
            </p>
          </div>

          {/* Payment Details */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <p className="text-gray-400 text-sm">
                Send exactly ${details.amount} to the following address:
              </p>
            </div>

            {/* Wallet Address */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Wallet Address</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={details.address}
                  readOnly
                  className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-sm"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(details.address)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Network */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Network</label>
              <div className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-sm">
                {paymentDetails.network}
              </div>
            </div>

            {/* Contract Address */}
            {/* <div className="space-y-2">
              <label className="text-sm text-gray-400">Contract Address</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={paymentDetails.contractAddress}
                  readOnly
                  className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-sm"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(paymentDetails.contractAddress)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => window.open(paymentDetails.bscscanUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div> */}


            {/* Security Note */}
            <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-400">
                Verify the contract address on blockchain explorers before sending any funds. This helps ensure you're interacting with the official USDT contract.
              </p>
            </div>

            {/* Important Notes */}
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-500 mb-2">Important Notes:</h3>
                  <ul className="space-y-1 text-sm text-yellow-500/80">
                    <li>• Send only USDT on the specified network</li>
                    <li>• Ensure the amount is exact</li>
                    <li>• Transaction may take 5-10 minutes to confirm</li>
                    <li>• Always verify contract addresses before sending</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Button */}
          <Button
            variant="gradient"

            disabled={isLoading}
            className="w-full group"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <>
                <span>I've Made the Payment</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>
      </main>
    </div>
  );
}