import { AuthGuard } from '@/lib/guards/auth.guard';
import { Dashboard } from '@/components/dashboard';
import { Support } from '@/components/support';
import { Profile } from '@/components/profile';
import { SignalsHistory } from '@/components/history';
import { Feedback } from '@/components/feedback';
import { Screener } from '@/components/screener';
import { Subscription } from '@/components/subscription';
import { ROUTE_NAMES } from './routenames';

export const protectedRoutes = [
  {
    path: ROUTE_NAMES.DASHBOARD,
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
  },
  {
    path: ROUTE_NAMES.HISTORY,
    element: (
      <AuthGuard>
        <SignalsHistory />
      </AuthGuard>
    ),
  },
  // {
  //   path: '/screener',
  //   element: (
  //     <AuthGuard>
  //       <Screener />
  //     </AuthGuard>
  //   ),
  // },
  {
    path: ROUTE_NAMES.SUPPORT,
    element: (
      <AuthGuard>
        <Support />
      </AuthGuard>
    ),
  },
  {
    path: ROUTE_NAMES.PROFILE,
    element: (
      <AuthGuard>
        <Profile />
      </AuthGuard>
    ),
  },
  {
    path: ROUTE_NAMES.SUBSCRIPTION,
    element: (
      <AuthGuard>
        <Subscription />
      </AuthGuard>
    ),
  },
  {
    path: ROUTE_NAMES.FEEDBACK,
    element: (
      <AuthGuard>
        <Feedback />
      </AuthGuard>
    ),
  }
];