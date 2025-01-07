import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/user';

interface GuestGuardProps {
  children: React.ReactNode;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const authToken = localStorage.getItem('auth_token');
  const location = useLocation()
  const { userDetails, isLoading } = useUser();
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  if (authToken && userDetails && userDetails?.isEmailVerified && location?.pathname !== "/reset-password/new" && userDetails?.isEmailVerified) {
    // Redirect authenticated users to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}