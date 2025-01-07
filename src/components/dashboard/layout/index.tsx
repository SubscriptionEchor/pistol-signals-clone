import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { Navbar } from './navbar';
import { MobileNav } from './mobile-nav'; // Import the mobile navigation

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#0A0A0A]">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Navigation - Visible only on mobile */}
      <div className="hidden sm:block">
        <MobileNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-[280px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
