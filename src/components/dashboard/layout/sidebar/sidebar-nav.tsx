```tsx
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  History, 
  Crown, 
  Users, 
  Share2,
  HelpCircle,
  User
} from 'lucide-react';

const mainMenu = [
  { 
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  { 
    label: 'Signals History',
    icon: History,
    path: '/history'
  }
];

const additionalOptions = [
  {
    label: 'Subscription Details',
    icon: Crown,
    path: '/subscription',
    badge: 'FREE 7-DAYS'
  },
  {
    label: 'Refer a Buddy',
    icon: Users,
    path: '/refer'
  },
  {
    label: 'Support & FAQs',
    icon: HelpCircle,
    path: '/support'
  },
  {
    label: 'User Profile',
    icon: User,
    path: '/profile'
  }
];

export function SidebarNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const NavItem = ({ item }: { item: typeof mainMenu[0] }) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;

    return (
      <button
        onClick={() => navigate(item.path)}
        className={`
          w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm
          transition-colors relative group
          ${isActive 
            ? 'text-white bg-gradient-to-r from-[#3366FF]/20 to-[#8B5CF6]/20' 
            : 'text-gray-400 hover:text-white hover:bg-white/5'
          }
        `}
      >
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute left-0 w-1 h-full bg-gradient-primary rounded-r"
          />
        )}
        <Icon className="w-5 h-5" />
        <span>{item.label}</span>
        {'badge' in item && item.badge && (
          <span className="ml-auto px-2 py-0.5 text-xs bg-gradient-primary rounded-full">
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="flex-1 py-6 space-y-6">
      {/* Main Menu */}
      <div>
        <h2 className="px-6 mb-2 text-xs font-medium text-gray-400 uppercase">
          Main Menu
        </h2>
        <nav className="space-y-1">
          {mainMenu.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </nav>
      </div>

      {/* Additional Options */}
      <div>
        <h2 className="px-6 mb-2 text-xs font-medium text-gray-400 uppercase">
          Additional Options
        </h2>
        <nav className="space-y-1">
          {additionalOptions.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
}
```