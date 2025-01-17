import { ResponsiveNavbar } from '@/components/ResponsiveNavbar/responsive-navbar';
import { MobileNav } from './layout/mobile-nav';
import { Sidebar } from './sidebar';
import ConfirmationPopup from '../popup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/lib/context/user';
import { ROUTE_NAMES } from '@/routes/routenames';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { setUserDetails } = useUser()
  const [isPopupOpen, setPopupOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleConfirmLogout = () => {
    localStorage.clear();
    setUserDetails({})
    navigate(ROUTE_NAMES.SIGNIN, { replace: true })// Clear local storage
    // Navigate to sign-in page (implementation here depends on your routing setup)
    // For example: navigate('/signin', { replace: true });
  };
  return (
    <div className="">
      <ResponsiveNavbar handleOpenPopup={handleOpenPopup} />
      <Sidebar handleOpenPopup={handleOpenPopup} />
      <div className="pt-12 xl:pt-0 flex-1 xl:ml-64">{children}</div>
      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}
