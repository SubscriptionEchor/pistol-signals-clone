import { useState } from 'react';
import { validateTelegramHandle } from '../utils/validation';
import { TelegramHandleState } from '../types';

export function useOnboardingForm() {
  const [state, setState] = useState<TelegramHandleState>({
    username: '',
    isConfirmOpen: false,
    error: null
  });

  const updateUsername = (username: string) => {
    const trimmedUsername = username.trim();
    const { error } = validateTelegramHandle(trimmedUsername);
    setState(prev => ({ ...prev, username: trimmedUsername, error }));
  };

  const openConfirmDialog = () => {
    const { isValid, error } = validateTelegramHandle(state.username);
    if (isValid) {
      setState(prev => ({ ...prev, isConfirmOpen: true, error: null }));
    } else {
      setState(prev => ({ ...prev, error }));
    }
  };

  const closeConfirmDialog = () => {
    setState(prev => ({ ...prev, isConfirmOpen: false }));
  };

  return {
    state,
    updateUsername,
    openConfirmDialog,
    closeConfirmDialog
  };
}