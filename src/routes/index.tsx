import { createBrowserRouter } from 'react-router-dom';
import Home from '@/home';
import { authRoutes } from './auth.routes';
import { protectedRoutes } from './protected.routes';
import { TermsOfService } from '@/components/terms';
import { PrivacyPolicy } from '@/components/privacy';
import { Payment } from '@/components/payment';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/terms',
    element: <TermsOfService />,
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  ...authRoutes,
  ...protectedRoutes,
]);