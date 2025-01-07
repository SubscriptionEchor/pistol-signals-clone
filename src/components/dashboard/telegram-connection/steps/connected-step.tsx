import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ConnectedStepProps {
  handle: string;
}

export function ConnectedStep({ handle }: ConnectedStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-4 p-4 bg-green-500/5 rounded-lg border border-green-500/10"
    >
      <CheckCircle2 className="w-5 h-5 text-green-400" />
      <div>
        <p className="text-sm font-medium">Successfully connected</p>
        <p className="text-sm text-gray-400">@{handle} is now connected to Pistol Signals</p>
      </div>
    </motion.div>
  );
}