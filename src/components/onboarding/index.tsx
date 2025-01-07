import { OnboardingProvider } from './context/onboarding-context';
import { OnboardingFlow } from './flow';

export function Onboarding() {
  return (
    <OnboardingProvider>
      <OnboardingFlow />
    </OnboardingProvider>
  );
}