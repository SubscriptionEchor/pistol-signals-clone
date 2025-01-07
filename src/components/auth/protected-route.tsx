import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/context/auth-context';
import { ROUTES } from '@/lib/config';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { state } = useAuth();
  const location = useLocation();

  if (!state.isAuthenticated) {
    return <Navigate to={ROUTES.AUTH.SIGNIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}