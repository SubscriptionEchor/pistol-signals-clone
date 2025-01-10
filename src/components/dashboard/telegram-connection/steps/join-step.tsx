import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TELEGRAM_CHANNEL_LINK } from '@/lib/config';

interface JoinStepProps {
  onJoined: () => void;
}

export function JoinStep({ onJoined }: JoinStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href={TELEGRAM_CHANNEL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-lg hover:bg-[#00D1FF]/20 transition-colors group"
        >
          <span className="text-[#00D1FF]">{TELEGRAM_CHANNEL_LINK}</span>
          <ExternalLink className="w-4 h-4 text-[#00D1FF] group-hover:translate-x-1 transition-transform" />
        </a>
        <Button
          variant="gradient"
          onClick={onJoined}
          className="flex items-center gap-2"
        >
          <span>I've Joined the Channel</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] mt-2" />
        <div className="space-y-1">
          <p className="text-sm font-medium">Join our official channel</p>
          <p className="text-sm text-gray-400">Click the link above to join our Telegram channel. Once you've joined, click the button to verify your membership.</p>
        </div>
      </div>
    </motion.div>
  );
}