import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RatingInput } from './rating-input';
import { useFeedbackForm } from '../hooks/useFeedbackForm';

export function FeedbackForm() {
  const {
    ratings,
    featureRequest,
    isSubmitting,
    handleRatingChange,
    setFeatureRequest,
    handleSubmit,
    resetForm
  } = useFeedbackForm();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Rating Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Signal Accuracy Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <RatingInput
              value={ratings.accuracy}
              onChange={(value) => handleRatingChange('accuracy', value)}
              label="How accurate are our trading signals?"
              name="accuracy"
            />
          </div>
        </motion.div>

        {/* Signal Quality Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <RatingInput
              value={ratings.signals}
              onChange={(value) => handleRatingChange('signals', value)}
              label="How would you rate our signals overall?"
              name="signals"
            />
          </div>
        </motion.div>
      </div>

      {/* Feature Request */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative group"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20">
              <MessageSquare className="w-5 h-5 text-[#00D1FF]" />
            </div>
            <h3 className="font-medium">Feature Request</h3>
          </div>
          <textarea
            value={featureRequest}
            onChange={(e) => setFeatureRequest(e.target.value)}
            placeholder="What features would you like to see added to our platform?"
            className="w-full h-32 px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-[#00D1FF] transition-colors text-sm resize-none"
          />
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button
          variant="secondary"
          onClick={resetForm}
          disabled={isSubmitting}
          className="px-6"
        >
          Reset
        </Button>
        <Button
          variant="gradient"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-6 bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] text-black font-medium"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            'Submit Feedback'
          )}
        </Button>
      </div>
    </motion.div>
  );
}