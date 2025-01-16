import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/user';
import { ROUTE_NAMES } from '@/routes/routenames';
import { SUBSCRIBE_PLANS } from '@/constant';



interface GuestGuardProps {
  children: React.ReactNode;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const authToken = localStorage.getItem('auth_token');
  const { userDetails, isLoading } = useUser()
  const location = useLocation();
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  if ((authToken && userDetails && userDetails?.isEmailVerified && (userDetails?.plan !== SUBSCRIBE_PLANS.FREE))) {
    return <Navigate to={ROUTE_NAMES.DASHBOARD} replace />;
  }
  else if (authToken && userDetails && userDetails?.isEmailVerified && (userDetails?.plan == SUBSCRIBE_PLANS.FREE) && (location.pathname !== ROUTE_NAMES.SUBSCRIPTION)) {
    return <Navigate to={ROUTE_NAMES.SUBSCRIPTION} replace />;
  }

  return <>{children} </>;
}