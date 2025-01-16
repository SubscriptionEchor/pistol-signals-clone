import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OTPInput } from './otp-input';
import { toast } from 'react-hot-toast';
import { ROUTES } from '@/lib/config';
import { authApi } from '@/services/api';
import { useUser } from '@/lib/context/user';
import { ROUTE_NAMES } from '@/routes/routenames';

export function VerifyOTPPage() {
  const [otp, setOTP] = useState<string[]>(Array(6).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { userDetails, setUserDetails } = useUser()
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!userDetails?.email) {
  //     navigate(-1)
  //   }
  // }, [userDetails])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (otp.some(digit => !digit)) {
      setError('Please enter all digits');
      return;
    }
    if (!userDetails?.email) {
      setError('invalid email');
      return
    }
    setIsLoading(true);

    try {
      // Simulate API call
      let res = await authApi.verifyOtp({
        email: userDetails?.email,
        otp: otp?.join('')
      })
      if (!res?.status) {
        return
      }
      setUserDetails(res?.data)
      navigate(ROUTE_NAMES.NEW_PASSWORD, { replace: true });
      toast.success('OTP verified successfully', { position: 'top-center' });
    } catch (error) {
      setError('Invalid OTP. Please try again.');
      // toast.error('Failed to verify OTP', { position: 'top-center' });
    } finally {
      setIsLoading(false);
    }
  };

  const onClickResendOtp = async () => {
    if (!userDetails?.email) {
      setError('invalid email');
      return
    }
    let result = await authApi.resendOtp(userDetails?.email)

    toast.success(result?.message, { position: 'top-center' });
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      {/* <header className="p-6 flex justify-between items-center">
        <img
          src="/assets/images/nav-logo.png"
          alt="AI Technical Analyst"
          className="h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <button
          onClick={() => navigate(ROUTES.AUTH.FORGOT_PASSWORD)}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
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
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <KeyRound className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold mb-3">Enter verification code</h1>
              <p className="text-gray-400">
                We've sent a 6-digit code to your email. Enter it below to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <OTPInput
                value={otp}
                onChange={setOTP}
                isError={!!error}
              />

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <Button
                type="submit"
                variant="gradient"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                </div> : 'Verify Code'}
              </Button>
            </form>

            <div className="text-center">
              <button
                className="text-sm text-primary hover:text-primary-light transition-colors"
                onClick={onClickResendOtp}
              >
                Didn't receive the code? Try again
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}