```typescript
import { 
  LayoutDashboard, 
  History, 
  Crown, 
  Users, 
  Share2,
  HelpCircle,
  LineChart
} from 'lucide-react';

export const menuItems = [
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
    label: 'Screener',
    icon: LineChart,
    path: '/screener',
    badge: 'Free'
  },
  { 
    label: 'Support & FAQ', 
    icon: HelpCircle, 
    path: '/support',
  }
];
```