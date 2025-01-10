import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/lib/context/user';
import { authApi } from '@/services/api';
import { toast } from 'react-hot-toast';

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const openGmail = () => {
    window.open('https://mail.google.com', '_blank');
  };

  const handleResendEmail = async () => {
    try {
      let result = await authApi.resendemail({ email: userDetails?.email });
      if (result?.status) {
        toast.success(result?.message);
      }
    } catch (error) {
      toast.error('Failed to resend email');
    }
  };

  const handleVerifyEmail = async () => {
    try {
      setIsLoading(true);
      let result = await authApi.getuser();
      if (result?.status) {
        if (!result?.data?.isEmailVerified) {
          toast.error('Email not verified yet');
          return;
        }
        setUserDetails(result?.data);
        navigate('/pricing');
      }
    } catch (error) {
      toast.error('Failed to verify email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <img
          src="/assets/images/nav-logo.png"
          alt="Pistol Signals"
          className="h-8"
        />
        <a
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Back to home
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold">Next up, verify your email</h1>
            <p className="text-gray-400">
              To continue subscribing a plan, head over to your inbox and click the verification 
              link we just sent you.
            </p>
          </motion.div>

          {/* Form Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Gmail and Resend Email Buttons Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="secondary"
                onClick={openGmail}
                className="flex items-center justify-center gap-2 group bg-white/10"
              >
                <Mail className="w-4 h-4" />
                <span>Open Gmail</span>
              </Button>

              <Button
                variant="secondary"
                onClick={handleResendEmail}
                className="flex items-center justify-center gap-2 border border-white/10 bg-transparent hover:bg-white/5"
              >
                <span>Resend Email</span>
              </Button>
            </div>

            {/* Verify Button */}
            <Button
              variant="gradient"
              onClick={handleVerifyEmail}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] text-black font-semibold hover:opacity-90 transition-opacity group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <>
                  <span>I've verified my email</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}