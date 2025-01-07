import { User, LoginCredentials, SignupCredentials } from '../types/auth';
import { API_URL } from '../config';

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<User> {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      return response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed');
    }
  }

  static async signup(credentials: SignupCredentials): Promise<User> {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      return response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Signup failed');
    }
  }

  static async logout(): Promise<void> {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}