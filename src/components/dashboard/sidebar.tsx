import {
  Home,
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
  Send,
  LayoutDashboard
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { OpenUrl } from '@/lib/utils';
import { TELEGRAM_CHANNEL_LINK } from '@/lib/config';
import { useUser } from '@/lib/context/user';

export function Sidebar({ handleOpenPopup }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { userDetails } = useUser()
  const menuItems = [
    // { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Clock, label: 'History', href: '/history' },
    // { icon: Clipboard, label: 'Subscription', href: '/subscription' },
    // { icon: Bell, label: 'Refer a Buddy', href: '/refer' },
    // { icon: Group, label: 'Affiliation', href: '/affiliate' },
    { icon: HelpCircle, label: 'Support', href: '/support' },
    { icon: User2Icon, label: 'Profile', href: '/profile' },
    { icon: MessageSquare, label: 'Feedback', href: '/feedback' },
    //{ icon: ScreenShare, label: 'Screener', href: '/screener' },
  ];
  return (
    <aside className="hidden xl:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-64 lg:bg-[#111]/80 lg:backdrop-blur-sm lg:border-r lg:border-white/5 xl:block">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div onClick={() => navigate('/dashboard')} className="cursor-pointer h-16 flex items-center px-6">
          <img src="/assets/images/nav-logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`
                w-full flex items-center mb-1 gap-3 px-3 py-3  rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors
                flex items-center gap-3 rounded-lg text-m font-medium
                transition-all duration-300 relative
                ${location?.pathname == item?.href
                  ? 'bg-white/10 text-white shadow-lg shadow-white/5'
                  : 'hover:bg-white/5  hover:text-white'
                }
              `}
            // className="
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
          {!userDetails?.tel_chat_id &&
            (userDetails?.invite_link && userDetails?.telegramId) ? <Button
              onClick={() => OpenUrl(userDetails?.invite_link)}
              variant="gradient"
              className="flex mt-10 items-center gap-2 whitespace-nowrap"
            >
            <Send className="w-4 h-4 " />
            Connect Telegram
          </Button> : null}
        </nav>


        {/* Logout Button */}
        <button
          onClick={handleOpenPopup}
          className="flex items-center gap-3 px-6 py-4 text-gray-400 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
