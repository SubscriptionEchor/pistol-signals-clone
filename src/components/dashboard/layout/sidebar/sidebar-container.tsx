import { motion } from 'framer-motion';
import { Sidebar } from './index';

interface SidebarContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarContainer({ isOpen, onClose }: SidebarContainerProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        x: isOpen ? 0 : '-100%',
        transition: { type: 'spring', damping: 25, stiffness: 200 }
      }}
      className="fixed inset-y-0 left-0 z-40 w-64 lg:static lg:transform-none"
    >
      <Sidebar onClose={onClose} />
    </motion.div>
  );
}