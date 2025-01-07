import { v4 as uuidv4 } from 'uuid';

export class SecurityUtils {
  static generateCSRFToken(): string {
    return uuidv4();
  }

  static validateCSRFToken(token: string, storedToken: string): boolean {
    return token === storedToken;
  }

  static hashPassword(password: string): string {
    // In a real application, use a proper password hashing library
    return btoa(password);
  }

  static generateNonce(): string {
    return uuidv4();
  }
}