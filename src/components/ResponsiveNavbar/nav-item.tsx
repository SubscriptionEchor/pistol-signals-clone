import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  badge?: string;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

export function NavItem({ icon: Icon, label, badge, isActive, onClick, isMobile }: NavItemProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        ${isMobile ? 'w-full p-3' : 'px-4 py-2'} 
        flex items-center gap-3 rounded-lg text-sm font-medium
        transition-all duration-300 relative
        ${isActive 
          ? 'bg-white/10 text-white shadow-lg shadow-white/5' 
          : 'hover:bg-white/5 text-gray-300 hover:text-white'
        }
      `}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-current'}`} />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
          {badge}
        </span>
      )}
      {isActive && (
        <motion.div
          layoutId={`activeIndicator${isMobile ? 'Mobile' : 'Desktop'}`}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
        />
      )}
    </motion.button>
  );
}