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
    const token = localStorage.getItem('auth_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content');
    if (csrfToken) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }

    return config;
  },
  (error: AxiosError) => {
    // Remove console.error and just reject the promise
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  async (error: AxiosError) => {
    // Handle different error cases without logging to console

    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/signin';
      return Promise.reject(error);
    }

    if (error.response?.status === 403) {
      toast.error('You do not have permission to perform this action', { position: 'top-center' });
      return Promise.reject(error);
    }

    if (error.response?.status === 404) {
      toast.error('Resource not found', { position: 'top-center' });
      return Promise.reject(error);
    }

    if (error.response?.status === 422) {
      const validationErrors = error.response.data?.errors;
      if (validationErrors) {
        Object.values(validationErrors).forEach((error: any) => {
          toast.error(error[0]);
        });
      }
      return Promise.reject(error);
    }

    if (error.message === 'Network Error') {
      toast.error('Network error.', { position: 'top-center' });
      return Promise.reject(error);
    }

    if (error.code === 'ECONNABORTED') {
      toast.error('Request timed out. Please try again.', { position: 'top-center' });
      return Promise.reject(error);
    }
    console.log(error?.response)
    toast.error(
      error?.response?.data?.message || 'An unexpected error occurred',
      { position: 'top-center' }
    );
    return Promise.reject(error);
  }
);

export default api;