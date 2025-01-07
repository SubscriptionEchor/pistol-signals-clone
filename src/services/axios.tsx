import { API_URL } from '@/lib/config';
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';
import { toast } from 'react-hot-toast';


// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage or your auth state management
    const token = localStorage.getItem('auth_token');

    // If token exists, add it to request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add CSRF token if needed
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content');
    if (csrfToken) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }

    return config;
  },
  (error: AxiosError) => {
    // Handle request errors
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response?.data;
  },
  async (error: AxiosError) => {

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      // Clear auth state and redirect to login
      localStorage.removeItem('auth_token');
      window.location.href = '/signin';
      return Promise.reject(error);
    }

    // Handle 403 Forbidden errors
    if (error.response?.status === 403) {
      toast.error('You do not have permission to perform this action', { position: 'top-center' });
      return Promise.reject(error);
    }

    // Handle 404 Not Found errors
    if (error.response?.status === 404) {
      toast.error('Resource not found', { position: 'top-center' });
      return Promise.reject(error);
    }

    // Handle 422 Validation errors
    if (error.response?.status === 422) {
      const validationErrors = error.response.data?.errors;
      if (validationErrors) {
        Object.values(validationErrors).forEach((error: any) => {
          toast.error(error[0]);
        });
      }
      return Promise.reject(error);
    }

    // Handle network errors
    if (error.message === 'Network Error') {
      toast.error('Network error.', { position: 'top-center' });
      return Promise.reject(error);
    }

    // Handle timeout errors
    if (error.code === 'ECONNABORTED') {
      toast.error('Request timed out. Please try again.', { position: 'top-center' });
      return Promise.reject(error);
      // Handle other errors
    }
    toast.error(
      error?.response?.data?.message || 'An unexpected error occurred',
      { position: 'top-center' }
    );
    Promise.reject(error);
    return error?.response?.data;
  }
);

export default api;
