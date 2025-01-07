import { FeatureGrid } from './feature-grid';
import { FeatureHighlight } from './feature-highlight';

export function Features() {
  return (
    <div className="space-y-32">
      <FeatureGrid />
      <FeatureHighlight />
    </div>
  );
}