import { createBrowserRouter } from 'react-router-dom';
import Home from '@/home';
import { authRoutes } from './auth.routes';
import { protectedRoutes } from './protected.routes';
import { TermsOfService } from '@/components/terms';
import { PrivacyPolicy } from '@/components/privacy';

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
  ...authRoutes,
  ...protectedRoutes,
]);