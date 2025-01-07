/**
 * Represents a user in the system
 */
export interface User {
  /** Unique identifier for the user */
  id: string;
  /** User's email address */
  email: string;
  /** User's display name */
  name?: string;
  /** URL to user's avatar image */
  avatar?: string;
  /** Timestamp of when the user was created */
  createdAt: string;
}

/**
 * Credentials required for user login
 */
export interface LoginCredentials {
  /** User's email address */
  email: string;
  /** User's password */
  password: string;
}

/**
 * Credentials required for user registration
 */
export interface SignupCredentials extends LoginCredentials {
  /** User's display name */
  name?: string;
}

/**
 * Response from authentication endpoints
 */
export interface AuthResponse {
  /** The authenticated user */
  user: User;
  /** JWT token for authentication */
  token: string;
}