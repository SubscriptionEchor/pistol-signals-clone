import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';
import { authApi } from '@/services/api';
import { useUser } from '@/lib/context/user';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { setUserDetails } = useUser()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let result = await authApi.resendOtp(email)
      if (result?.status) {
        navigate('/reset-password/verify')
        setUserDetails({ email })
        toast.success(result?.message, { position: 'top-center' });
      }

    } catch (error) {
      toast.error('Failed to send reset instructions. Please try again.', { position: 'top-center' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      {/* <header className="p-6 flex justify-between items-center">
        <img
          src="/assets/images/nav-logo.png"
          alt="Pistol Signals"
          className="h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <button
          onClick={() => navigate('/signin')}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to sign in
        </button>
      </header> */}

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
              <h1 className="text-3xl font-bold mb-3">Reset your password</h1>
              <p className="text-gray-400">
                Enter your email address and we'll send you instructions to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div> : 'Send Email'}
              </Button>
            </form>
          </div>

        </motion.div>
      </main>
    </div>
  );
}