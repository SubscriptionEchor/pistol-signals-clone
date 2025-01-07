import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AuthDivider } from '../components/auth-divider';
import { GoogleButton } from '../components/google-button';
import { PasswordInput } from '../components/password-input';
import { FormField } from '../components/form-field';
import { useAuthForm } from '../hooks/useAuthForm';

export function SignInForm() {
  const navigate = useNavigate();
  const { formData, errors, isLoading, setFormData, handleSubmit } = useAuthForm();

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Login to your account</h1>
        <p className="mt-2 text-gray-400">Welcome back! Please enter your details</p>
      </div>

      <GoogleButton />
      <AuthDivider />

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />

        <div className="space-y-1">
          <PasswordInput
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
            placeholder="Enter your password"
            error={errors.password}
          />
          <button
            type="button"
            onClick={() => navigate('/auth/forgot-password')}
            className="text-sm text-primary hover:text-primary-light transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <Button 
          type="submit" 
          variant="secondary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-400">
        New to Pistol Signals?{' '}
        <button
          onClick={() => navigate('/auth/signup')}
          className="text-primary hover:text-primary-light transition-colors font-medium"
        >
          Create an account
        </button>
      </p>
    </>
  );
}