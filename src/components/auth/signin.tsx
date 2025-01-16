import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { authApi } from '@/services/api/auth';
import { useUser } from '@/lib/context/user';
import toast from 'react-hot-toast';
import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_AUTH_API_KEY } from '@/lib/config';
import { ROUTE_NAMES } from '@/routes/routenames';
import { SUBSCRIBE_PLANS } from '@/constant';

function SignInPageComponent() {
  const { userDetails, setUserDetails, login } = useUser();
  const [isEmailVerified, setEmailVerified] = useState(true);
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  // Get a specific parameter, e.g., 'planId'
  const planId = searchParams.get('planId');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: !validateEmail(formData.email) ? 'Please enter a valid email' : '',
      password: !formData.password ? 'Password is required' : '',
    };

    setErrors(newErrors);
    if (!newErrors.email && !newErrors.password) {
      let res = await login(formData?.email, formData?.password);
      if (!res?.status) {
        return;
      }
      localStorage.setItem('auth_token', res?.data?.access_token);
      if (!res?.data?.isEmailVerified) {
        setEmailVerified(false);
        return;
      }
      setUserDetails(res?.data);
      navigate(ROUTE_NAMES.DASHBOARD);
    }
  };

  const handleResendEmail = async () => {
    interface Payload {
      email: string | undefined;
    }
    let payload: Payload = {
      email: formData?.email,
    };
    let result = await authApi.resendemail(payload);

    if (result?.status) {
      toast.success(result?.message, {
        position: 'top-center'
      });
    }
  };

  const handleVerifyEmail = async () => {
    try {
      interface Payload {
        authorizarion: string | undefined;
      }
      let payload: Payload = {
        authorizarion: userDetails?.access_token,
      };
      setUserDetails((prev) => ({ ...prev, isLoading: true }));
      let result = await authApi.getuser(payload);
      setUserDetails((prev) => ({ ...prev, isLoading: false }));
      if (result?.status) {
        if (!result?.data?.isEmailVerified) {
          toast('Email not verified');
          return;
        }
        setUserDetails(result?.data);
        if (result?.data?.plan == SUBSCRIBE_PLANS.PAID) {
          toast.success('User login successful')
        }
        navigate(ROUTE_NAMES.DASHBOARD);
      }
    } catch (error) {
      setUserDetails((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      let res = await authApi.googleLogin({ access_token: tokenResponse?.access_token })
      if (!res || !res?.status) {
        // return toast.error(res?.message, {
        //   position: 'top-center'
        // })
      }
      localStorage.setItem('auth_token', res?.data?.access_token);
      setUserDetails((prev: any) => ({
        ...prev,
        ...res?.data,
        isEmailVerified: true
      }));
      if (res?.data?.plan == SUBSCRIBE_PLANS.PAID) {
        toast.success('User login successful')
      }

      navigate(ROUTE_NAMES.DASHBOARD, { replace: true });
    },
    onError: (error) => console.log(error),
  });

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {isEmailVerified ? (
        <main className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold">Sign In to your account</h1>
              <p className="mt-2 text-gray-400">
                Welcome back! Please enter your details
              </p>
            </div>

            <button
              onClick={loginWithGoogle}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg border border-white/10"
            >
              <img src="/assets/icons/google.svg" alt="" className="w-5 h-5" />
              Continue with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-500">
                  or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => {
                    let res: any = { ...errors }
                    delete res["email"]
                    setErrors(res)
                    setFormData({ ...formData, email: e.target.value?.toLowerCase() })
                  }
                  }
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-gray-800'
                    } rounded-lg focus:outline-none focus:border-primary transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <input
                    type={formData.showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => {
                      let res: any = { ...errors }
                      delete res["password"]
                      setErrors(res)
                      setFormData({ ...formData, password: e.target.value })
                    }
                    }
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.password ? 'border-red-500' : 'border-gray-800'
                      } rounded-lg focus:outline-none focus:border-primary transition-colors pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        showPassword: !formData.showPassword,
                      })
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {formData.showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
                <button
                  type="button"
                  onClick={() => navigate(ROUTE_NAMES.FORGOT_PASSWORD)}
                  className="text-sm text-[#00D1FF] hover:text-[#47EBEB] transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] text-black font-semibold hover:opacity-90"
              >
                {userDetails?.isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className='text-xs text-gray-400'>
              By continuing, you agree to the{' '}
              <button
                onClick={() => navigate('/terms')}
                className='text-[#00D1FF] hover:underline'
              >
                Terms of Service
              </button>{' '}
              and{' '}
              <button
                onClick={() => navigate('/privacy')}
                className='text-[#00D1FF] hover:underline'
              >
                Privacy Policy
              </button>
            </div>

            <p className="text-center text-sm text-gray-400">
              New to Pistol Signals?{' '}
              <button
                onClick={() => navigate(ROUTE_NAMES.SIGNUP)}

                className="text-[#00D1FF] hover:underline"
              >
                Create an account
              </button>
            </p>
          </motion.div>
        </main>
      ) : (
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-center"
            >
              <h1 className="text-3xl font-bold">Next up, verify your email</h1>
              <p className="text-gray-400">
                To continue subscribing a plan, head over to your inbox and
                click the verification link we just sent you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <button
                onClick={handleResendEmail}
                className="text-[#22C55E] hover:text-[#16A34A] transition-colors text-sm w-full text-center"
              >
                Resend email
              </button>

              <Button
                variant="gradient"
                className="w-full bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] hover:opacity-90 transition-opacity group"
                onClick={handleVerifyEmail}
              >
                {userDetails?.isLoading ? (
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
      )}
    </div>
  );
}

export default function SignInPage() {
  return (
    <GoogleOAuthProvider
      clientId={GOOGLE_AUTH_API_KEY}
    >
      <SignInPageComponent />
    </GoogleOAuthProvider>
  );
}