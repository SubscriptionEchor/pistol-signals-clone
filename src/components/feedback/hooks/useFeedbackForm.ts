import { useState } from 'react';
import { toast } from 'react-hot-toast';
import type { Rating, FeedbackFormData } from '../types';
import { commonApi } from '@/services/api/common';

const initialRatings: Rating = {
  accuracy: 0,
  signals: 0,
  usability: 0
};

export function useFeedbackForm() {
  const [ratings, setRatings] = useState<Rating>(initialRatings);
  const [featureRequest, setFeatureRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingChange = (name: keyof Rating, value: number) => {
    setRatings(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setRatings(initialRatings);
    setFeatureRequest('');
  };

  const validateForm = (): boolean => {
    const hasRatings = Object.values(ratings).some(rating => rating > 0);
    if (!hasRatings && !featureRequest) {
      toast.error('Please share your feedback  to improve our platform ');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      let payload = {}
      if (ratings?.accuracy > 0) {
        payload['signal_accuracy'] = ratings?.accuracy
      }
      if (ratings?.signals > 0) {
        payload['signal_quality'] = ratings?.signals
      }
      if (ratings?.usability > 0) {
        payload['ease_of_use'] = ratings?.usability
      }
      if (featureRequest) {
        payload['feature_request'] = featureRequest
      }
      let res = await commonApi.feedback(payload)

      toast.success(res?.message);
      resetForm();
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    ratings,
    featureRequest,
    isSubmitting,
    handleRatingChange,
    setFeatureRequest,
    handleSubmit,
    resetForm
  };
}