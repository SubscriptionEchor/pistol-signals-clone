export type ConnectionStatus = 'not_connected' | 'pending_join' | 'pending_approval' | 'connected';

export interface TelegramState {
  status: ConnectionStatus;
  handle?: string;
  channelLink?: string;
}