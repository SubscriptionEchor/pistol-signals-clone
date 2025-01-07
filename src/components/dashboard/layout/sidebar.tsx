```tsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  History, 
  Crown, 
  Users, 
  Share2,
  HelpCircle,
  LogOut,
  ChevronRight,
  Settings
} from 'lucide-react';

const menuItems = [
  { 
    label: 'Dashboard', 
    icon: LayoutDashboard, 
    path: '/dashboard',
    badge: null
  },
  { 
    label: 'History', 
    icon: History, 
    path: '/history',
    badge: null
  },
  { 
    label: 'Subscription', 
    icon: Crown, 
    path: '/subscription',
    badge: '7 days free',
    disabled: true
  },
  { 
    label: 'Refer a Buddy', 
    icon: Users, 
    path: '/refer',
    badge: null
  },
  { 
    label: 'Affiliation', 
    icon: Share2, 
    path: '/affiliate',
    badge: null
  },
  { 
    label: 'Support & FAQ', 
    icon: HelpCircle, 
    path: '/support',
    badge: null
  }
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="fixed left-0 top-0 bottom-0 bg-[#111]/80 backdrop-blur-sm border-r border-white/5 z-50"
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <img src="/assets/images/nav-logo.png" alt="Logo" className="h-8" />
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => !item.disabled && navigate(item.path)}
              disabled={item.disabled}
              className={`
                w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                transition-colors relative group
                ${isActive 
                  ? 'text-white bg-white/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
                ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1 h-full bg-gradient-primary rounded-r"
                />
              )}

              <Icon className="w-5 h-5 flex-shrink-0" />
              
              <span className="flex-1 text-left">{item.label}</span>
              
              {item.badge && (
                <span className="px-2 py-0.5 text-xs bg-gradient-primary rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="p-3 bg-white/5 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Pro Plan</p>
            </div>
            <button 
              onClick={() => navigate('/settings')}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <button 
            onClick={() => navigate('/logout')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
```