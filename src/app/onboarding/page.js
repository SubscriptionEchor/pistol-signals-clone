import React, { useState, useMemo } from 'react';
import { Eye, EyeOff, Info, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Toast = ({ message, type = 'success', onClose }) => (
  <Alert className={`fixed right-4 top-4 w-80 animate-in slide-in-from-right 
    ${type === 'success' ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
    <AlertCircle className={`h-4 w-4 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`} />
    <AlertDescription className="ml-2 text-sm text-gray-200">{message}</AlertDescription>
  </Alert>
);

const InputField = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  showPassword,
  onTogglePassword,
}) => (
  <div className="space-y-2">
    {label && (
      <label className="text-sm font-medium text-gray-300">{label}</label>
    )}
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 text-[15px] 
          caret-white placeholder-gray-500 transition-colors
          ${error
            ? 'border-red-500 text-red-50 focus:border-red-500'
            : 'border-gray-800 text-gray-100 hover:border-gray-700 focus:border-gray-600'
          }
          focus:outline-none focus:ring-1 focus:ring-gray-600`}
        placeholder={placeholder}
      />
      {Icon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {type === 'password' ? (
            <button
              onClick={onTogglePassword}
              className="text-gray-400 transition-colors hover:text-gray-300"
              type="button"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          ) : (
            <Icon className="h-5 w-5 text-gray-400" />
          )}
        </div>
      )}
    </div>
    {error && (
      <p className="flex items-center gap-1 text-xs text-red-400">
        <AlertCircle className="h-3 w-3" /> {error}
      </p>
    )}
  </div>
);

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const isFormValid = useMemo(() => {
    return formData.email && formData.password && formData.password.length >= 8;
  }, [formData.email, formData.password]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        showToast('Account created successfully!', 'success');
      } catch (error) {
        showToast('Failed to create account. Please try again.', 'error');
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-[440px] space-y-8 rounded-[20px] bg-[#111111] p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Create your account
          </h1>
          <p className="text-sm text-gray-300">
            Join thousands of users managing their workflows
          </p>
        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-[15px] font-medium text-white transition-all hover:opacity-90 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#111111]">
          <img src="/api/placeholder/20/20" alt="Google" className="h-5 w-5" />
          Continue with Google
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#111111] px-4 text-gray-500">
              or continue with email
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            type="email"
            label="Email address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={errors.email}
            icon={Info}
          />

          <InputField
            type={formData.showPassword ? 'text' : 'password'}
            label="Password"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            error={errors.password}
            icon={Eye}
            showPassword={formData.showPassword}
            onTogglePassword={() =>
              setFormData({ ...formData, showPassword: !formData.showPassword })
            }
          />

          <div className="space-y-2 text-sm text-gray-400">
            <p>Password must contain</p>
            <div className="flex items-center gap-2">
              <span
                className={`transition-colors ${formData.password.length >= 8 ? 'text-green-400' : 'text-gray-500'
                  }`}
              >
                ✓
              </span>
              <span
                className={`transition-colors ${formData.password.length >= 8
                    ? 'text-gray-300'
                    : 'text-gray-500'
                  }`}
              >
                8 characters
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full rounded-lg px-4 py-3 text-[15px] font-medium transition-all
              ${isFormValid
                ? 'bg-[#1A1A1A] text-white hover:bg-[#222] focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#111111]'
                : 'cursor-not-allowed bg-gray-800 text-gray-400'
              }`}
          >
            Continue
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <button className="font-medium text-green-400 transition-colors hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#111111]">
            Sign in
          </button>
        </p>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default SignupForm;
