import { render, screen, fireEvent } from '@testing-library/react';
import { SignInForm } from '../signin/form';
import { SignUpForm } from '../signup/form';

describe('Authentication Forms', () => {
  describe('SignInForm', () => {
    it('validates email format', () => {
      render(<SignInForm />);
      
      const emailInput = screen.getByPlaceholderText('Email address');
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));
      
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  describe('SignUpForm', () => {
    it('validates password requirements', () => {
      render(<SignUpForm />);
      
      const passwordInput = screen.getByPlaceholderText('Create a password');
      fireEvent.change(passwordInput, { target: { value: 'weak' } });
      fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
      
      expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument();
    });
  });
});