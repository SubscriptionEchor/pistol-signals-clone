import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-6"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
        <div className="relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <User className="w-8 h-8 text-purple-400" />
        </div>
      </div>
      
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          User Profile
        </h1>
        <p className="text-gray-400 mt-1">
          Manage your account settings and preferences
        </p>
      </div>
    </motion.div>
  );
}