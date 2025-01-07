import { Bell, Settings } from 'lucide-react';
import { Button } from '../ui/button';

export function DashboardHeader() {
  return (
    <header className="bg-[#111]/80 backdrop-blur-sm border-b border-white/5 sticky top-0 z-50">
      <div className="px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          
          <div className="w-px h-6 bg-white/10" />
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Pro Plan</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}