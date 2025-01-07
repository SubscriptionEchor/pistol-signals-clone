import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/lib/context/auth-context';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';

export function LogoutButton() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setShowConfirmation(false);
  };

  return (
    <>
      <button
        onClick={() => setShowConfirmation(true)}
        className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span>Sign Out</span>
      </button>

      <ConfirmDialog
        isOpen={showConfirmation}
        title="Sign Out"
        message="Are you sure you want to sign out? You'll need to sign in again to access your account."
        confirmLabel="Sign Out"
        cancelLabel="Cancel"
        onConfirm={handleLogout}
        onCancel={() => setShowConfirmation(false)}
        variant="danger"
      />
    </>
  );
}