import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FormField } from '../components/form-field';
import { useAuthForm } from '../hooks/useAuthForm';

export function ForgotPasswordForm() {
  const navigate = useNavigate();
  const { formData, errors, isLoading, setFormData, handleSubmit } = useAuthForm();

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Reset your password</h1>
        <p className="mt-2 text-gray-400">
          Enter your email address and we'll send you instructions to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />

        <Button 
          type="submit" 
          variant="secondary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send reset instructions'}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-400">
        Remember your password?{' '}
        <button
          onClick={() => navigate('/auth/signin')}
          className="text-primary hover:text-primary-light transition-colors font-medium"
        >
          Back to sign in
        </button>
      </p>
    </>
  );
}