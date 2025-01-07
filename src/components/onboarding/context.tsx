import { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingContextType {
  step: number;
  setStep: (step: number) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <OnboardingContext.Provider value={{ step, setStep, isLogin, setIsLogin }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
}