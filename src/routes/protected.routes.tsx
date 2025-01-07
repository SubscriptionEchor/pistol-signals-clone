
import { AuthGuard } from '@/lib/guards/auth.guard';
import { Dashboard } from '@/components/dashboard';
import { Support } from '@/components/support';
import { Profile } from '@/components/profile';
import { SignalsHistory } from '@/components/history';
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
  {
    path: '/history',
    element: (
      <AuthGuard>
        <SignalsHistory />
      </AuthGuard>
    ),
  },
  {
    path: '/screener',
    element: (
      <AuthGuard>
        <Screener />
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
  }
];
