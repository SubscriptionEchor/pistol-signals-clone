import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function FeedbackHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20">
          <MessageSquare className="w-6 h-6 text-[#00D1FF]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Share Your Feedback</h1>
          <p className="text-gray-400 mt-1">Help us improve our platform by sharing your experience</p>
        </div>
      </div>
    </motion.div>
  );
}