import { DashboardLayout } from '../dashboard/layout';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';

interface PaymentDetails {
  address: string;
  amount: string;
  network: string;
  contractAddress: string;
  explorerUrl: string;
}

const mockPaymentDetails: PaymentDetails = {
  address: '0x1234567890abcdef1234567890abcdef12345678',
  amount: '150',
  network: 'Ethereum (ERC20)',
  contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  explorerUrl: 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7'
};

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const plan = location.state?.plan;

  useEffect(() => {
    if (!plan) {
      navigate('/pricing');
    }
  }, [plan, navigate]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const triggerConfetti = () => {
    // Fire multiple confetti bursts
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

    // Fire confetti from left, middle, and right
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

    // Fire some confetti with custom colors
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

  const handlePaymentConfirm = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Trigger confetti before navigation
      triggerConfetti();
      
      toast.success('Payment confirmed successfully!');
      
      // Add a small delay to allow confetti animation to play
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      toast.error('Failed to confirm payment');
    } finally {
      setIsLoading(false);
    }
  };

  if (!plan) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <img src="/assets/images/nav-logo.png" alt="Logo" className="h-8" />
        <button
          onClick={() => navigate('/pricing')}
          className="text-gray-400 hover:text-white transition-colors"
        >
          Cancel
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
                Send exactly {mockPaymentDetails.amount} USDT to the following address:
              </p>
            </div>

            {/* Wallet Address */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Wallet Address</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={mockPaymentDetails.address}
                  readOnly
                  className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-sm"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(mockPaymentDetails.address)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Network */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Network</label>
              <div className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-sm">
                {mockPaymentDetails.network}
              </div>
            </div>

            {/* Contract Address */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Contract Address</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={mockPaymentDetails.contractAddress}
                  readOnly
                  className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-sm"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(mockPaymentDetails.contractAddress)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => window.open(mockPaymentDetails.explorerUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Important Notes */}
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <h3 className="text-yellow-500 font-medium mb-2">Important Notes:</h3>
              <ul className="text-sm text-yellow-500/80 space-y-1">
                <li>• Send only USDT on the specified network</li>
                <li>• Ensure the amount is exact</li>
                <li>• Transaction may take 5-10 minutes to confirm</li>
              </ul>
            </div>
          </div>

          {/* Confirmation Button */}
          <Button
            variant="gradient"
            className="w-full group"
            onClick={handlePaymentConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
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