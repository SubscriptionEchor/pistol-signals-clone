export const API_URL = import.meta.env.VITE_API_URL || 'https://dev-api.aitechnicalanalyst.com/api/v1';
export const TELEGRAM_CHANNEL_LINK = import.meta.env.VITE_TELEGRAM_CHANNEL_LINK || 'https://t.me/+iBNvAI-6ASNhMGE9'
export const TELEGRAM_COMMUNITY_LINK = import.meta.env.VITE_TELEGRAM_COMMUNITY_LINK || 'https://t.me/pistolsignals'
export const GOOGLE_AUTH_API_KEY = import.meta.env.VITE_GOOGLE_CLIENT_ID || '292781869173-b0o4nounaijmsldofhnbbe74rqiccn5u.apps.googleusercontent.com'
const CLOUD_URL = import.meta.env.VITE_CLOUD_URL || 'https://d2mmqc3v0skn2o.cloudfront.net/'
export const PRIVACY_POLICY = import.meta.env.VITE_PRIVACY_POLICY || 'https://www.termsfeed.com/live/428f6fe5-9946-4df5-b7a5-b842cbd90747'
export const TERMS_OF_CONDITION = CLOUD_URL + 'terms-condtions.docx' || 'https://d2mmqc3v0skn2o.cloudfront.net/terms-condtions.docx'
export const IMAGE_URL = CLOUD_URL + 'coin/' || 'https://d2mmqc3v0skn2o.cloudfront.net/coin/'
export const TWITTER_LINK = import.meta.env.VITE_TWITTER_LINK || 'https://twitter.com/pistolsignals'
export const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:5173'

export const ROUTES = {
  HOME: '/',
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    FORGOT_PASSWORD: '/auth/forgot-password'
  },
  DASHBOARD: '/dashboard'
} as const;