import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useOnboarding } from '../context/onboarding-context';
import { validateEmail, validatePassword } from '../utils/validation';
import { Button } from '@/components/ui/button';

export function RegisterStep() {
  const { state, updateState, nextStep } = useOnboarding();
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {
      email: validateEmail(state.email) ? '' : 'Please enter a valid email',
      password: validatePassword(state.password) ? '' : 'Password must be at least 8 characters',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 relative z-10"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {state.isLogin ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          {state.isLogin 
            ? 'Sign in to continue to your account' 
            : 'Get started with your trading journey'}
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-1">
          <input
            type="email"
            placeholder="Email address"
            value={state.email}
            onChange={e => updateState({ email: e.target.value })}
            className={`w-full px-4 py-3 bg-white/5 border ${
              errors.email ? 'border-red-500' : 'border-gray-800'
            } rounded-lg focus:outline-none focus:border-primary transition-colors`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-1">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={state.isLogin ? 'Enter password' : 'Create password'}
              value={state.password}
              onChange={e => updateState({ password: e.target.value })}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.password ? 'border-red-500' : 'border-gray-800'
              } rounded-lg focus:outline-none focus:border-primary transition-colors pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <Button 
          variant="gradient"
          className="w-full"
          onClick={handleSubmit}
        >
          {state.isLogin ? 'Sign in' : 'Create account'}
        </Button>

        <p className="text-center text-sm text-gray-400">
          {state.isLogin ? (
            <>
              New to Pistol Signals?{' '}
              <button
                onClick={() => updateState({ isLogin: false })}
                className="text-blue-400 hover:text-blue-300"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => updateState({ isLogin: true })}
                className="text-blue-400 hover:text-blue-300"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
}