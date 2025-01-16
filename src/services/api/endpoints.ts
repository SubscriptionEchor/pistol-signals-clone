// API endpoints configuration
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/user/login',
    SIGNUP: '/user/register',
    RESEND_EMAIL: '/user/resend-otp',
    GET_USER: '/user',
    UPDATE: '/user',
    LOGOUT: '/user/logout',
    RESEND_OTP: '/user/send-otp',
    VERIFY_OTP: "/user/reset-password",
    RESET_PASSWORD: '/user/reset-password',
    GOOGLE_LOGIN: '/user/google-login',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile/update',
    CHANGE_PASSWORD: '/user/password/change'
  },

  TRADING: {
    ACTIVE: '/signals/active',
    ANALYTICS: '/signals/analytics',
    HISTORY: '/signals/history',
  },
  MARKET: {
    MARKET_CAP: '/market/cap',
    INDEX: '/market/fng-index',
    DOMINANCE: 'market/dom'
  },
  BASIC: {
    PLAN: '/plan',
    FEEDBACK: '/feedback',
    SUBSCRIBE: '/plan/subscribe',
    VERIFY_PAYMENT: '/plan/verify-payment'
  }
} as const;
