export interface Rating {
  accuracy: number;
  signals: number;
  usability: number;
}

export interface FeedbackFormData {
  ratings: Rating;
  featureRequest: string;
}

export interface RatingInputProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  name: keyof Rating;
}