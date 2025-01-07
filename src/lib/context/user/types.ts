export interface User {
  id: string;
  email: string;
  name?: string;
  telegramHandle?: string;
  isEmailVerified: boolean;
  createdAt: string;
}

export interface UserContextState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface UserContextValue extends UserContextState {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (data: Partial<User>) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  resendVerification: () => Promise<void>;
}