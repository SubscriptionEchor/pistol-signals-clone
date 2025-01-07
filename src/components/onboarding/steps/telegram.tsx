import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOnboardingForm } from '../hooks/useOnboardingForm';
import { TelegramConfirmDialog } from './telegram-confirm-dialog';

export function TelegramStep() {
  const { state, updateUsername, openConfirmDialog, closeConfirmDialog } = useOnboardingForm();

  const handleSubmit = () => {
    // Handle successful confirmation here
    console.log('Telegram handle confirmed:', state.username);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <img
          src="/assets/images/nav-logo.png"
          alt="Pistol Signals"
          className="h-8"
        />
        <a href="/" className="text-gray-400 hover:text-white transition-colors">
          Back to home
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold">Enter telegram handle</h1>
            <p className="text-gray-400">
              Share your Telegram handle with us! This is your key to receiving all trading signals, 
              and remember, you can't change it once it's submitted.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="relative">
              <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={state.username}
                onChange={(e) => updateUsername(e.target.value)}
                placeholder="Enter telegram username"
                className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${
                  state.error ? 'border-red-500' : 'border-gray-800'
                } rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
              />
              {state.error && (
                <p className="mt-2 text-sm text-red-500">{state.error}</p>
              )}
            </div>

            <Button
              variant="gradient"
              className="w-full bg-gradient-to-r from-[#3366FF] to-[#8B5CF6]"
              onClick={openConfirmDialog}
            >
              I've confirmed my details!
            </Button>
          </motion.div>
        </div>
      </main>

      <TelegramConfirmDialog
        isOpen={state.isConfirmOpen}
        username={state.username}
        onConfirm={handleSubmit}
        onCancel={closeConfirmDialog}
      />
    </div>
  );
}