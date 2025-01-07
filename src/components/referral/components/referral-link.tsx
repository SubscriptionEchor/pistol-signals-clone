import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ReferralLink() {
  const referralLink = 'https://pistolsignals.com/join/--abcD123xyz456';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // Add toast notification here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-4"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-400">Share with a Link</h3>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={referralLink}
          readOnly
          className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm"
        />
        <Button onClick={copyToClipboard} className="flex items-center gap-2">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
    </motion.div>
  );
}