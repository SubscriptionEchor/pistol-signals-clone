import { AuthGuard } from '@/lib/guards/auth.guard';
import { Dashboard } from '@/components/dashboard';
import { Subscription } from '@/components/subscription';
import { ReferralProgram } from '@/components/referral';
import { Affiliation } from '@/components/affiliation';
import { Support } from '@/components/support';
import { Profile } from '@/components/profile';
import TelegramPage from '@/components/telegram/telegram-page';
import VerifyEmail from '@/components/verify-email';
import SignUpPage from '@/components/auth/signup';
import { SignalsHistory } from '@/components/history';
import { ForgotPasswordPage } from '@/components/auth/forgot-password';
import { Feedback } from '@/components/feedback';
import { Screener } from '@/components/screener';

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
  },
  // {
  //   path: '/subscription',
  //   element: (
  //     <AuthGuard>
  //       <Subscription />
  //     </AuthGuard>
  //   ),
  // },
  // {
  //   path: '/refer',
  //   element: (
  //     <AuthGuard>
  //       <ReferralProgram />
  //     </AuthGuard>
  //   ),
  // },
  {
    path: '/affiliate',
    element: (
      <AuthGuard>
        <Affiliation />
      </AuthGuard>
    ),
  },

  {
    path: '/history',
    element: (
      <AuthGuard>
        <SignalsHistory />
      </AuthGuard>
    ),
  },
  {
    path: '/support',
    element: (
      <AuthGuard>
        <Support />
      </AuthGuard>
    ),
  },
  {
    path: '/profile',
    element: (
      <AuthGuard>
        <Profile />
      </AuthGuard>
    ),
  },
  {
    path: '/feedback',
    element: (
      <AuthGuard>
        <Feedback />
      </AuthGuard>
    ),
  },
  /*{
    path: '/screener',
    element: (
      <AuthGuard>
        <Screener />
      </AuthGuard>
    ),
  },*/
  {
    path: '/signup',
    element: (
      <AuthGuard>
        <SignUpPage />
      </AuthGuard>
    ),
  },
  {
    path: '/verify',
    element: (
      <AuthGuard>
        <VerifyEmail />
      </AuthGuard>
    ),
  },
];