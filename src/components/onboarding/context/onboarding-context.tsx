import { createContext, useContext, useState, ReactNode } from 'react';
import { OnboardingState, OnboardingContextType } from '../types';

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const initialState: OnboardingState = {
  step: 1,
  isLogin: false,
  email: '',
  password: '',
  telegramHandle: '',
  selectedPlan: null,
};

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OnboardingState>(initialState);

  const updateState = (updates: Partial<OnboardingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => updateState({ step: state.step + 1 });
  const prevStep = () => updateState({ step: state.step - 1 });

  return (
    <OnboardingContext.Provider value={{ state, updateState, nextStep, prevStep }}>
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