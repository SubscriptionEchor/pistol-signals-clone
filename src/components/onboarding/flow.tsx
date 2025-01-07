import { useOnboarding } from './context/onboarding-context';
import { RegisterStep } from './steps/register';
import { TelegramStep } from './steps/telegram';
import { EmailVerification } from './steps/email-verification';
import { PlanSelection } from './steps/plan-selection';

export function OnboardingFlow() {
  const { state } = useOnboarding();

  const steps = {
    1: RegisterStep,
    2: TelegramStep,
    3: EmailVerification,
    4: PlanSelection,
  };

  const CurrentStep = steps[state.step as keyof typeof steps];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '32px 32px' }} 
      />
      <CurrentStep />
    </div>
  );
}