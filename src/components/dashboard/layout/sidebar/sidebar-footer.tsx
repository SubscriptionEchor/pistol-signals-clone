```tsx
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SidebarFooter() {
  const navigate = useNavigate();

  return (
    <div className="p-4 border-t border-white/5">
      <button
        onClick={() => navigate('/logout')}
        className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}
```