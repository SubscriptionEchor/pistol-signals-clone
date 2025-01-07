import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function FeedbackHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
          <MessageSquare className="w-6 h-6 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold">Feedback</h1>
      </div>
      <p className="text-gray-400">
        Help us improve our platform by sharing your experience. Your feedback is valuable to us.
      </p>
    </motion.div>
  );
}