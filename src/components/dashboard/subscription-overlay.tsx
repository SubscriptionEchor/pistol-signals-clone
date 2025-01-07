
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface SubscriptionOverlayProps {
  expiryDate?: string;
}

export function SubscriptionOverlay({ expiryDate }: SubscriptionOverlayProps) {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 z-[100] backdrop-blur-sm bg-black/50 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 p-8 rounded-xl border border-white/20 max-w-md w-full mx-4 text-center shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">Subscription Expired</h2>
        <p className="text-gray-400 mb-6">
          Your subscription expired on {expiryDate || 'N/A'}. Renew now to continue accessing our premium features.
        </p>
        <Button 
          variant="gradient" 
          onClick={() => navigate('/pricing')}
          className="w-full"
        >
          Renew Subscription
        </Button>
      </motion.div>
    </div>
  );
}
