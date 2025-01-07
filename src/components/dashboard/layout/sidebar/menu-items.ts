```typescript
import { 
  LayoutDashboard, 
  History, 
  Crown, 
  Users, 
  Share2,
  HelpCircle
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
    label: 'Subscription', 
    icon: Crown, 
    path: '/subscription',
    badge: '7 days free'
  },
  { 
    label: 'Refer a Buddy', 
    icon: Users, 
    path: '/refer',
  },
  { 
    label: 'Affiliation', 
    icon: Share2, 
    path: '/affiliate',
  },
  { 
    label: 'Support & FAQ', 
    icon: HelpCircle, 
    path: '/support',
  }
];
```