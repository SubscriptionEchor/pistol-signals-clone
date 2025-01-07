import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AuthDivider } from '../components/auth-divider';
import { GoogleButton } from '../components/google-button';
import { PasswordInput } from '../components/password-input';
import { FormField } from '../components/form-field';
import { useAuthForm } from '../hooks/useAuthForm';
import { PasswordStrength } from './password-strength';

export function SignUpForm() {
  const navigate = useNavigate();
  const { formData, errors, isLoading, setFormData, handleSubmit } = useAuthForm(true);

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Create your account</h1>
        <p className="mt-2 text-gray-400">Get started with your trading journey</p>
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

        <div className="space-y-2">
          <PasswordInput
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
            placeholder="Create a password"
            error={errors.password}
          />
          <PasswordStrength password={formData.password} />
        </div>

        <Button 
          type="submit" 
          variant="secondary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-400">
        Already have an account?{' '}
        <button
          onClick={() => navigate('/auth/signin')}
          className="text-primary hover:text-primary-light transition-colors font-medium"
        >
          Sign in
        </button>
      </p>
    </>
  );
}