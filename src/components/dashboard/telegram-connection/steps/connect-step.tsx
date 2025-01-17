import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/context/user';

interface ConnectStepProps {
  onSubmit: (handle: string) => void;
}

export function ConnectStep({ onSubmit, loader }: ConnectStepProps) {
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!handle) {
      setError('Please enter your Telegram handle');
      return;
    }
    onSubmit(handle);

  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="max-w-md space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">@</div>
            <input
              type="text"
              value={handle}
              onChange={(e) => {
                setHandle(e.target.value);
                setError('');
              }}
              placeholder="yourusername"
              className={`w-full pl-8 pr-4 py-2 bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'
                } rounded-lg focus:outline-none focus:border-[#00D1FF] transition-colors`}
            />
            {error && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-red-500" />
              </div>
            )}
          </div>
          <Button
            onClick={handleSubmit}
            variant="gradient"
            className="flex items-center gap-2 whitespace-nowrap"
          >
            {loader ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="w-4 h-4 me-1" />
                Connect Telegram
              </div>
            )}
          </Button>
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00D1FF]" />
          <span className="text-gray-400">Instant trading signals</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00FFFF]" />
          <span className="text-gray-400">Real-time market updates</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-gray-400">24/7 community support</span>
        </div>
      </div>
    </motion.div>
  );
}