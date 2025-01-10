import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, ArrowRight, AlertCircle, ArrowLeft, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';

export function SubscriptionCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan;

  const paymentDetails = {
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    network: 'Ethereum (ERC20)',
    amount: '150 USDT',
    explorerUrl: 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7',
    bscscanUrl: 'https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955'
  };

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1500
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      origin: { x: 0.2 }
    });

    fire(0.2, {
      spread: 60,
      origin: { x: 0.5 }
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      origin: { x: 0.8 }
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#00D1FF', '#00FFFF']
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#00D1FF', '#00FFFF']
    });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const handlePaymentConfirm = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      triggerConfetti();
      toast.success('Payment confirmed successfully!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      toast.error('Failed to confirm payment');
    } finally {
      setIsLoading(false);
    }
  };

  if (!plan) {
    navigate('/pricing');
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <img src="/assets/images/nav-logo.png" alt="Logo" className="h-8" />
        <button
          onClick={() => navigate('/pricing')}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to pricing
        </button>
      </header>

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
            <p className="text-gray-400">
              You selected the {plan.name} plan at {plan.price}{plan.period}
            </p>
          </div>

          {/* Payment Details */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <p className="text-gray-400 text-sm">
                Send exactly {paymentDetails.amount} to the following address:
              </p>
            </div>

            {/* Wallet Address */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Wallet Address</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={paymentDetails.walletAddress}
                  readOnly
                  className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-sm"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(paymentDetails.walletAddress)}
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
            <div className="space-y-2">
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
                  onClick={() => window.open(paymentDetails.explorerUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Verification Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={paymentDetails.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-black/50 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <img src="/ethereum.svg" alt="Ethereum" className="w-5 h-5" />
                  <span className="text-sm">Verify on Etherscan</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={paymentDetails.bscscanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-black/50 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <img src="/binance.svg" alt="BSC" className="w-5 h-5" />
                  <span className="text-sm">Verify on BSCScan</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>

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
            onClick={handlePaymentConfirm}
            disabled={isLoading}
            className="w-full group"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
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