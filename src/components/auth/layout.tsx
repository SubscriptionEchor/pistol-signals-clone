import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function AuthLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <img
          src="/assets/images/nav-logo.png"
          alt="Pistol Signals"
          className="h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <button
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-white transition-colors"
        >
          Back to home
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}