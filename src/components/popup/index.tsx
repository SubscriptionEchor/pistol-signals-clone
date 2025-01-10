import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { Button } from '../ui/button';

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationPopup = ({ isOpen, onClose, onConfirm }: ConfirmationPopupProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md"
        >
          <div className="relative bg-[#111] rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-red-500/10">
                <LogOut className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sign Out</h3>
                <p className="text-gray-400 text-sm">Are you sure you want to sign out?</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={onConfirm}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white transition-colors"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConfirmationPopup;