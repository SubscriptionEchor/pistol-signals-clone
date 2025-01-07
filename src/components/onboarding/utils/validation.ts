export const validateTelegramHandle = (handle: string): { isValid: boolean; error: string | null } => {
  if (!handle) {
    return { isValid: false, error: 'Telegram handle is required' };
  }
  if (handle.includes(' ')) {
    return { isValid: false, error: 'Handle cannot contain spaces' };
  }
  if (handle.length < 3) {
    return { isValid: false, error: 'Handle must be at least 3 characters' };
  }
  return { isValid: true, error: null };
};