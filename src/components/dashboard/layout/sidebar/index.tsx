import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  History,
  HelpCircle,
  LogOut,
  User2Icon,
  MessageSquare,
  LineChart,
  Send,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TELEGRAM_CHANNEL_LINK } from '@/lib/config';
import { OpenUrl } from '@/lib/utils';
import { useUser } from '@/lib/context/user';

interface SidebarProps {
  handleOpenPopup: () => void;
}

export function Sidebar({ handleOpenPopup }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { userDetails } = useUser();

  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      label: 'History',
      icon: History,
      path: '/history',
    },
    {
      label: 'Support & FAQ',
      icon: HelpCircle,
      path: '/support',
    },
    {
      label: 'Profile',
      icon: User2Icon,
      path: '/profile'
    },
    {
      label: 'Subscription',
      icon: CreditCard,
      path: '/subscription'
    },
    {
      label: 'Feedback',
      icon: MessageSquare,
      path: '/feedback'
    },
    {
      label: 'Screener',
      icon: LineChart,
      path: '/screener',
      badge: 'Free'
    }
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#111]/80 backdrop-blur-sm border-r border-white/5 hidden xl:block">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <img src="/assets/images/nav-logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                  transition-colors relative group
                  ${isActive
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-full bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] rounded-r"
                  />
                )}
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] text-black rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Telegram Connection Button */}
          {(userDetails?.invite_link && userDetails?.telegramId) && (
            <Button
              onClick={() => OpenUrl(userDetails?.invite_link)}
              variant="gradient"
              className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] text-black font-medium hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Connect Telegram
            </Button>
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleOpenPopup}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}