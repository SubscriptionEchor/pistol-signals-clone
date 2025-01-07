import { Button } from '@/components/ui';
import { TELEGRAM_CHANNEL_LINK } from '@/lib/config';
import { OpenUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MessageCircle, Check, ShieldCheckIcon, ExternalLink, } from 'lucide-react';

export function TelegramSettings({ userDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Telegram Connection</h2>
        <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm flex items-center gap-2">
          <Check className="w-4 h-4" />
          Connected
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6">
        <div className="flex flex-col md:flex-row  items-center gap-4">
          <div className="p-3 rounded-lg bg-blue-500/20">
            <MessageCircle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="text-lg  font-medium">{userDetails?.telegramId}</div>
            {/* <p className="text-sm text-gray-400">Connected since Oct 15, 2023</p> */}
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm text-gray-400">
            <ShieldCheckIcon className="w-4 h-4" />
            Verified
          </div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-white/10">
        <Button
          variant="gradient"
          className="w-full sm:w-auto flex items-center justify-center gap-2 group"
          onClick={() => OpenUrl(TELEGRAM_CHANNEL_LINK)}
        >
          <MessageCircle className="w-5 h-5" />
          Join Telegram Channel
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="mt-3 text-sm text-gray-400">
          Note: Join our official Telegram channel to receive real-time trading signals and updates if you haven't joined yet
        </p>
      </div>
    </motion.div>
  );
}