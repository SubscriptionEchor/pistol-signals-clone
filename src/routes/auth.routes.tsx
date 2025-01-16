import { GuestGuard } from '@/lib/guards/guest.guard';
import SignInPage from '@/components/auth/signin';
import SignUpPage from '@/components/auth/signup';
import TelegramPage from '@/components/telegram/telegram-page';
import { ForgotPasswordPage } from '@/components/auth/forgot-password';
import { VerifyOTPPage } from '@/components/auth/verify-otp';
import { ResetPasswordPage } from '@/components/auth/reset-password';
import VerifyEmail from '@/components/verify-email';
import { ROUTE_NAMES } from './routenames';

export const authRoutes = [
  {
    path: ROUTE_NAMES.SIGNIN,
    element: (
      <GuestGuard>
        <SignInPage />
      </GuestGuard>
    ),
  },
  {
    path: ROUTE_NAMES.SIGNUP,
    element: (
      <GuestGuard>
        <SignUpPage />
      </GuestGuard>
    ),
  },
  {
    path: ROUTE_NAMES.VERIFY_EMAIL,
    element: (
      <GuestGuard>
        <VerifyEmail />
      </GuestGuard>
    ),
  },
  {
    path: ROUTE_NAMES.TELEGRAM,
    element: (
      <GuestGuard>
        <TelegramPage />
      </GuestGuard>
    ),
  },
  {
    path: ROUTE_NAMES.FORGOT_PASSWORD,
    element: (
      <GuestGuard>
        <ForgotPasswordPage />
      </GuestGuard>
    ),
  },
  {
    path: ROUTE_NAMES.VERIFY_OTP,
    element: (
      <GuestGuard>
        <VerifyOTPPage />
      </GuestGuard>
    ),
  },
  {
    path: ROUTE_NAMES.NEW_PASSWORD,
    element: (
      <GuestGuard>
        <ResetPasswordPage />
      </GuestGuard>
    ),
  }
];