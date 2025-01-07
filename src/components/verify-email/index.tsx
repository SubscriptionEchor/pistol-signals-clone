import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VerifyEmail() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <img
          src="/assets/images/nav-logo.png"
          alt="Pistol Signals"
          className="h-8"
        />
        <a
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Back to home
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold">Next up, verify your email</h1>
            <p className="text-gray-400">
              To continue subscribing a plan, head over to your inbox and click the verification 
              link we just sent you.
            </p>
          </motion.div>

          {/* Form Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Resend Email Link */}
            <button
              className="text-[#22C55E] hover:text-[#16A34A] transition-colors text-sm w-full text-center"
            >
              Resend email
            </button>

            {/* Verify Button */}
            <Button
              variant="gradient"
              className="w-full bg-gradient-to-r from-[#3366FF] to-[#8B5CF6] hover:opacity-90 transition-opacity group"
            >
              <span>I've verified my email</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}