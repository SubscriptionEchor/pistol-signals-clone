import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Send, X } from 'lucide-react';
import { NavItem } from './nav-item';
import type { MenuItem } from '@/components/dashboard/layout/sidebar/menu-items';
import { Button } from '../ui';
import { useUser } from '@/lib/context/user';
import { OpenUrl } from '@/lib/utils';
import { TELEGRAM_CHANNEL_LINK } from '@/lib/config';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function MobileMenu({ isOpen, onClose, menuItems, currentPath, onNavigate, handleOpenPopup }: MobileMenuProps) {
  const { userDetails } = useUser()
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" // Hide on large screens
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#1A1A1A] shadow-2xl shadow-black/50 z-50 xl:hidden" // Hide on large screens
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center  p-4 border-b border-white/10">
                {/* <div className="px-4 py-2 rounded-lg bg-white/5">
                  <h2 className="text-sm font-medium text-white/80">Navigation</h2>
                </div> */}
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex-1 overflow-y-auto py-4 px-3"
              >
                {userDetails?.telegramId ? <Button
                  onClick={() => OpenUrl(TELEGRAM_CHANNEL_LINK)}
                  variant="gradient"
                  className="flex my-5 items-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-4 h-4 " />
                  Connect Telegram
                </Button> : null}
                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavItem
                        icon={item.icon}
                        label={item.label}
                        badge={item.badge}
                        isActive={currentPath === item.href}
                        onClick={() => onNavigate(item.href)}
                        isMobile
                      />
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={handleOpenPopup}
                  className="flex items-center gap-3 px-3 py-4 text-gray-400 hover:text-white transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign out</span>
                </button>
              </motion.div>

            </div>


          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}