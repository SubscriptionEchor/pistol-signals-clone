import { createBrowserRouter } from 'react-router-dom';
import Home from '@/home';
import { authRoutes } from './auth.routes';
import { protectedRoutes } from './protected.routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  ...authRoutes,
  ...protectedRoutes,
]);