import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { authApi } from '@/services/api/auth';
import { useUser } from '@/lib/context/user/user-context';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { GOOGLE_AUTH_API_KEY } from '@/lib/config';
import toast from 'react-hot-toast';
import { ROUTE_NAMES } from '@/routes/routenames';

function SignUpPageComponent() {
  const { setUserDetails, signup } = useUser();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    referralCode: '',
    showPassword: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

  // Get a specific parameter, e.g., 'planId'
  const referral = searchParams.get('referral');

  useEffect(() => {
    if (referral) {
      setFormData(prev => ({ ...prev, referralCode: referral }))
    }
  }, [referral])

  const passwordRequirements: PasswordRequirement[] = [
    {
      regex: /[A-Z]/,
      label: 'One uppercase letter',
      met: /[A-Z]/.test(formData.password)
    },
    {
      regex: /[a-z]/,
      label: 'One lowercase letter',
      met: /[a-z]/.test(formData.password)
    },
    {
      regex: /[0-9]/,
      label: 'One number',
      met: /[0-9]/.test(formData.password)
    },
    {
      regex: /[!@#$%^&*(),.?":{}|<>]/,
      label: 'One special character',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
    },
    {
      regex: /.{8,}/,
      label: 'Minimum 8 characters',
      met: formData.password.length >= 8
    }
  ];

  const validateForm = () => {
    const newErrors = {
      email: !validateEmail(formData.email) ? 'Please enter a valid email' : '',
      password: !validatePassword(formData.password)
        ? 'Password validation failed'
        : '',
    };

    setErrors(newErrors);
    if (newErrors.email || newErrors.password) {
      return false;
    }
    return true;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return passwordRequirements.every(req => req.met);
  };

  const handleSubmit = async (e) => {
    try {
      e?.preventDefault()
      if (!validateForm()) {
        return;
      }

      setIsLoading(true);
      let res = await signup(
        formData?.email,
        formData.password,
        null,
        null,
        formData.referralCode
      );
      setIsLoading(false);

      if (!res || !res?.status) {
        return;
      }

      localStorage.setItem('auth_token', res?.data?.access_token);
      setUserDetails((prev: any) => ({
        ...prev,
        ...res?.data,
      }));

      navigate(ROUTE_NAMES.VERIFY_EMAIL);
    }
    catch (e) {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      let res = await signup(
        null,
        null,
        null,
        tokenResponse?.access_token,
        formData.referralCode
      );
      if (!res || !res?.status) {
        return toast.error(res?.message, { position: 'top-center' })
      }
      localStorage.setItem('auth_token', res?.data?.access_token);
      setUserDetails(prev => ({ ...prev, ...res?.data, isEmailVerified: true }));
      navigate(ROUTE_NAMES.DASHBOARD, { replace: true });
    },
    onError: (error) => console.log(error),
  });

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="mt-2 text-gray-400">
              Get started with your trading journey
            </p>
          </div>

          <button onClick={loginWithGoogle} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg border border-white/10">
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
                onChange={e => {
                  let res: any = { ...errors }
                  delete res["email"]
                  setErrors(res)
                  setFormData({ ...formData, email: e.target.value?.toLowerCase() })
                }}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg focus:outline-none focus:border-primary transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={formData.showPassword ? 'text' : 'password'}
                placeholder="Create password"
                value={formData.password}
                onChange={e => {
                  let res: any = { ...errors }
                  delete res["password"]
                  setErrors(res)
                  setFormData({ ...formData, password: e.target.value })
                }}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.password ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg focus:outline-none focus:border-primary transition-colors pr-12`}
              />
              <button
                type="button"
                onClick={() => setFormData({
                  ...formData,
                  showPassword: !formData.showPassword,
                })}
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
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
            {/* Referral Code Field */}
            <div className="relative">
              <div className="flex items-center">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Referral code (optional)"
                  value={formData.referralCode}
                  onChange={e => setFormData({ ...formData, referralCode: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-[#00D1FF] transition-colors"
                />
              </div>
            </div>

            {formData?.password && <div className="grid grid-cols-1 gap-2">
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
              className="w-full mt-6 py-3 px-4 rounded-lg text-black font-semibold transition-colors duration-200 bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] hover:opacity-90"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                "Continue"
              )}
            </Button>

            <p className='text-xs text-gray-400'>
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
            </p>
          </form>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/signin')}
              className="text-[#00D1FF] hover:underline"
            >
              Sign in
            </button>
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <GoogleOAuthProvider
      clientId={GOOGLE_AUTH_API_KEY}
    >
      <SignUpPageComponent />
    </GoogleOAuthProvider>
  )
}