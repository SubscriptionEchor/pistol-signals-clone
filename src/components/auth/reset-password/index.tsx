import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PasswordInput } from './password-input';
import { toast } from 'react-hot-toast';
import { ROUTES } from '@/lib/config';
import { useUser } from '@/lib/context/user';
import { authApi } from '@/services/api';

export function ResetPasswordPage() {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useUser()
  const passwordRequirements: PasswordRequirement[] = [
    {
      regex: /[A-Z]/,
      label: 'One uppercase letter',
      met: /[A-Z]/.test(passwords.newPassword || '')
    },
    {
      regex: /[a-z]/,
      label: 'One lowercase letter',
      met: /[a-z]/.test(passwords.newPassword || '')
    },
    {
      regex: /[0-9]/,
      label: 'One number',
      met: /[0-9]/.test(passwords.newPassword)
    },
    {
      regex: /[!@#$%^&*(),.?":{}|<>]/,
      label: 'One special character',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(passwords.newPassword || '')
    },
    {
      regex: /.{8,}/,
      label: 'Minimum 8 characters',
      met: passwords.newPassword?.length >= 8
    }
  ]

  const validatePasswords = () => {
    const newErrors = {
      newPassword: '',
      confirmPassword: ''
    };
    if (passwords.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !newErrors.newPassword && !newErrors.confirmPassword;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePasswords()) {
      return;
    }

    setIsLoading(true);
    try {
      localStorage.setItem('auth_token', userDetails.access_token)
      let result = await authApi.update({
        password: passwords?.newPassword
      })
      if (!result?.status) {
        toast(result?.message)
        return
      }
      navigate('/signin', { replace: true });
    } catch (error) {
      toast.error('Failed to reset password. Please try again.', { position: 'top-center' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <img
          src="/assets/images/nav-logo.png"
          alt="Pistol Signals"
          className="h-8"
        />
        <button
          onClick={() => navigate('/signin')}
          className="text-white hover:text-primary transition-colors flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to sign in
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-3xl font-bold mb-3">Set new password</h1>
              <p className="text-gray-400">
                Your new password must be different from previously used passwords
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <PasswordInput
                value={passwords.newPassword}
                onChange={(value) => setPasswords(prev => ({ ...prev, newPassword: value }))}
                placeholder="Enter new password"
                error={errors.newPassword}
              />

              <PasswordInput
                value={passwords.confirmPassword}
                onChange={(value) => setPasswords(prev => ({ ...prev, confirmPassword: value }))}
                placeholder="Confirm new password"
                error={errors.confirmPassword}
              />
              {passwords.newPassword && <div className="grid grid-cols-1 gap-2">
                {passwordRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`${requirement?.met ? 'bg-gradient-to-r from-[#00D1FF] to-[#00FFFF]' : 'bg-gray-400'} rounded-full p-0.5`}>
                      <svg
                        className={`w-3 h-3 text-black transition-opacity duration-200 ${requirement?.met ? 'opacity-100' : 'opacity-0'
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className={`text-sm ${requirement.met ? 'bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] bg-clip-text text-transparent' : 'text-gray-400'
                      }`}>
                      {requirement.label}
                    </span>
                  </div>
                ))}
              </div>}

              <Button
                type="submit"
                variant="gradient"
                className="w-full bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] text-black font-semibold hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                </div> : 'Reset Password'}
              </Button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}