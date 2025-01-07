
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu, Home,
  LineChart,
  Bell,
  Share2,
  Settings,
  HelpCircle,
  LogOut,
  User2Icon,
  Group,
  SubscriptIcon,
  Clipboard,
  Clock,
  MessageSquare,
  ScreenShare,
  LayoutDashboard
} from 'lucide-react';
import { NavLogo } from './nav-logo';
import { MobileMenu } from './mobile-menu';

export function ResponsiveNavbar({ handleOpenPopup }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Clock, label: 'History', href: '/history' },
    { icon: HelpCircle, label: 'Support', href: '/support' },
    { icon: User2Icon, label: 'Profile', href: '/profile' },
    { icon: MessageSquare, label: 'Feedback', href: '/feedback' },
    { icon: LineChart, label: 'Screener', href: '/screener', badge: 'Free' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 xl:hidden">
      <div className="absolute inset-0 bg-[#111]/90 backdrop-blur-md border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLogo />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-400" />
          </motion.button>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuItems={menuItems}
        currentPath={location.pathname}
        onNavigate={handleNavigation}
        handleOpenPopup={handleOpenPopup}
      />
    </nav>
  );
}
