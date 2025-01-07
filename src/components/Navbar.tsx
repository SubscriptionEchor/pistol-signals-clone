import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Zap className="text-blue-500" size={24} />
            <span className="text-xl font-bold">CryptoSignals</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}