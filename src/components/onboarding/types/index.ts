export interface TelegramHandleState {
  username: string;
  isConfirmOpen: boolean;
  error: string | null;
}

export interface TelegramConfirmDialogProps {
  isOpen: boolean;
  username: string;
  onConfirm: () => void;
  onCancel: () => void;
}