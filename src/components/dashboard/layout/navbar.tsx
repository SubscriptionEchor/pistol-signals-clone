import { MobileNav } from './mobile-nav';
import { Search, Bell, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#111]/80 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Search Bar - Hide on mobile */}
        <div className="hidden md:block flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <Bell className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>

          {/* User Profile */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-primary" />
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
