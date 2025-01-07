import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/user';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const location = useLocation()
  const { userDetails, isLoading } = useUser();
  const authToken = localStorage.getItem('auth_token');
  // console.log('auth_token', authToken);
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  if ((!authToken && location?.pathname != '/signup') || (authToken && userDetails && !userDetails?.isEmailVerified)) {
    return <Navigate to='/signin' />;
  }

  return <>{children}</>;
}
