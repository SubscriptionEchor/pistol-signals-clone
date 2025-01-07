import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EmailInvite() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <h3 className="text-sm text-gray-400">Send an Invitation via Email</h3>
      
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="Enter email address"
          className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm"
        />
        <Button className="flex items-center gap-2">
          <Send className="w-4 h-4" />
          Invite
        </Button>
      </div>
    </motion.div>
  );
}