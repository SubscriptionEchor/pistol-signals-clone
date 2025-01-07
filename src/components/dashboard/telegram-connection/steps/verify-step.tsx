import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

export function VerifyStep() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="text-sm">Handle submitted</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="text-sm">Channel joined</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
          <span className="text-sm">Verifying membership</span>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/10">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
        <div className="space-y-1">
          <p className="text-sm font-medium">Verification in progress</p>
          <p className="text-sm text-gray-400">We're verifying your channel membership. This usually takes less than 5 minutes.</p>
        </div>
      </div>
    </motion.div>
  );
}