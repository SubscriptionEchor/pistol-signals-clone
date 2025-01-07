import { motion } from 'framer-motion';
import { MessageSquare, Star, Smile, Lightbulb, RotateCcw } from 'lucide-react';
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
              <MessageSquare className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-medium">Signal Accuracy</h3>
          </div>
          <RatingInput
            value={ratings.accuracy}
            onChange={(value) => handleRatingChange('accuracy', value)}
            label="How accurate are our trading signals?"
            name="accuracy"
          />
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
              <Star className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-medium">Signal Quality</h3>
          </div>
          <RatingInput
            value={ratings.signals}
            onChange={(value) => handleRatingChange('signals', value)}
            label="How would you rate our signals overall?"
            name="signals"
          />
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
              <Smile className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-medium">Ease of Use</h3>
          </div>
          <RatingInput
            value={ratings.usability}
            onChange={(value) => handleRatingChange('usability', value)}
            label="How easy is it to use our platform?"
            name="usability"
          />
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
            <Lightbulb className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="font-medium">Feature Request</h3>
        </div>
        <textarea
          value={featureRequest}
          onChange={(e) => setFeatureRequest(e.target.value)}
          placeholder="What features would you like to see added to our platform?"
          className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm resize-none"
        />
      </div>

      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={resetForm}
          className="flex items-center gap-2"
          disabled={isSubmitting}
        >
          <RotateCcw className="w-4 h-4" />
          Reset Form
        </Button>
        <Button
          variant="gradient"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex items-center gap-2"
        >
          {isSubmitting ? <div className="flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div> : 'Submit Feedback'}
        </Button>
      </div>
    </motion.div>
  );
}