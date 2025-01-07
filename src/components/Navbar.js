import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-[#3366FF]" strokeWidth={2.5} />
              <span className="text-2xl font-semibold">Pistol Signals</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/login" className="text-gray-300 hover:text-white transition">
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="bg-[#3366FF] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg transition font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}