import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useOnboarding } from '../context/onboarding-context';
import { Button } from '@/components/ui/button';

export function EmailVerification() {
  const { nextStep } = useOnboarding();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 relative z-10"
    >
      <h2 className="text-2xl font-bold">Next up, verify your email</h2>
      <p className="text-gray-400">
        To continue subscribing a plan, head over to your inbox and click the verification 
        link we just sent you.
      </p>

      <Button 
        variant="gradient"
        className="w-full group"
        onClick={() => nextStep()}
      >
        <span>I've confirmed my email!</span>
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>

      <button className="text-sm text-blue-400 hover:text-blue-300">
        Resend email
      </button>
    </motion.div>
  );
}