import { GuestGuard } from '@/lib/guards/guest.guard';
import SignInPage from '@/components/auth/signin';
import SignUpPage from '@/components/auth/signup';
import TelegramPage from '@/components/telegram/telegram-page';
import { ForgotPasswordPage } from '@/components/auth/forgot-password';
import { VerifyOTPPage } from '@/components/auth/verify-otp';
import { ResetPasswordPage } from '@/components/auth/reset-password';
import VerifyEmail from '@/components/verify-email';

export const authRoutes = [
  {
    path: '/signin',
    element: (
      // <GuestGuard>
        <SignInPage />
      // </GuestGuard>
    ),
  },
  {
    path: '/signup',
    element: (
      // <GuestGuard>
        <SignUpPage />
      // </GuestGuard>
    ),
  },
  {
    path: '/verify-email',
    element: (
      // <GuestGuard>
        <VerifyEmail />
      // </GuestGuard>
    ),
  },
  {
    path: '/telegram',
    element: (
      // <GuestGuard>
        <TelegramPage />
      // </GuestGuard>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      // <GuestGuard>
        <ForgotPasswordPage />
      // </GuestGuard>
    ),
  },
  {
    path: '/reset-password/verify',
    element: (
      // <GuestGuard>
        <VerifyOTPPage />
      // </GuestGuard>
    ),
  },
  {
    path: '/reset-password/new',
    element: (
      // <GuestGuard>
        <ResetPasswordPage />
      // </GuestGuard>
    ),
  }
];