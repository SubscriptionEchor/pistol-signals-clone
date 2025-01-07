import api from '../axios';
import { API_ENDPOINTS } from './endpoints';
import {
  ApiResponse,
  LoginRequest,
  SignupRequest,
  User,
  ResendEmail,
  GetUser,
} from './types';

export const authApi = {
  login: (data: LoginRequest) =>
    api.post<ApiResponse<{ user: User; token: string }>>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    ),
  googleLogin: (data: LoginRequest) =>
    api.post<ApiResponse<{ user: User; token: string }>>(
      API_ENDPOINTS.AUTH.GOOGLE_LOGIN,
      data
    ),
  signup: (data: SignupRequest) =>
    api.post<ApiResponse<{ user: User; token: string }>>(
      API_ENDPOINTS.AUTH.SIGNUP,
      data
    ),
  resendemail: (data: ResendEmail) =>
    api.post<ApiResponse<{ email: string }>>(
      API_ENDPOINTS.AUTH.RESEND_EMAIL,
      data
    ),
  getuser: () =>
    api.get<ApiResponse<{ email: string }>>(API_ENDPOINTS.AUTH.GET_USER),

  logout: () => api.post<ApiResponse<null>>(API_ENDPOINTS.AUTH.LOGOUT),
  update: (data) => api.put<ApiResponse<null>>(API_ENDPOINTS.AUTH.UPDATE, data),

  resendOtp: (email: string) =>
    api.post<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.AUTH.RESEND_OTP,
      { email }
    ),
  verifyOtp: (data: any) =>
    api.post<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.AUTH.VERIFY_OTP,
      data
    ),

  resetPassword: (token: string, password: string) =>
    api.post<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.AUTH.RESET_PASSWORD,
      {
        token,
        password,
      }
    ),
};
