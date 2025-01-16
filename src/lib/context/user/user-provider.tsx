import { useState, useCallback, ReactNode, useEffect } from 'react';
import { UserContext } from './user-context';
import type { User, UserContextState } from './types';
import { toast } from 'react-hot-toast';
import { authApi } from '@/services/api/auth';
import { marketApi } from '@/services/api';

const initialState: UserContextState = {
  email: '',
  passwod: '',
  telegram_id: '',
  isLoading: false,
  error: null,
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] =
    useState<UserContextState>(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [marketData, setMarketData] = useState()
  const [indexData, setIndexData] = useState()
  const [dominance, setDominance] = useState()
  const [plan, setPlan] = useState(null)


  useEffect(() => {
    (async () => {
      let [marketDataResult, indexDataResult, dominanceResult] = await Promise.all([marketApi.getMarket(), marketApi.getIndex(), marketApi.getDominance()])

      // let res = await marketApi.getIndex()
      if (indexDataResult?.status) {
        setIndexData(indexDataResult?.data)
      }
      if (dominanceResult?.status) {
        setDominance(dominanceResult?.data)
      }
      // let result = await marketApi.getMarket();
      if (marketDataResult?.status) {
        marketDataResult = marketDataResult?.data?.map((item: any) => {
          return {
            name: new Date(item.timestamp * 1000).toLocaleString(),
            value: item.marketCap,
            volume: item.volume
          };
        });
        setMarketData(marketDataResult);
      }
    })();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const result = await authApi.getuser();
        if (result?.status) {
          setUserDetails(result?.data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      fetchUserDetails();
    } else {
      setIsLoading(false); // No token, set loading to false
    }
  }, []);

  const setLoading = (isLoading: boolean) => {
    setUserDetails((prev) => ({ ...prev, isLoading }));
  };

  const setError = (error: string | null) => {
    setUserDetails((prev) => ({ ...prev, error }));
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      interface Payload {
        email: string | undefined;
        password: string | undefined;
      }
      // Handle successful validation
      let payload: Payload = {
        email: email,
        password: password,
      };
      let result = await authApi.login(payload);
      return result;
    } catch (error) {
      // const message =
      //   error instanceof Error ? error.message : 'Failed to login';
      // setError(message);
      // toast.error(message, { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, telegram: string, access_token: string, ref_code: string) => {
    // Add your signup API call here
    interface Payload {
      email: string | undefined;
      password: string | undefined;
      telegram_id: string | undefined;
      ref_code: string | undefined
    }
    let payload: Payload = {
      email: email,
      password: password,
      telegram_id: telegram,
    };
    if (access_token) {
      payload['access_token'] = access_token
    }
    if (ref_code) {
      payload['ref_code'] = ref_code
    }
    let result = await authApi.signup(payload);
    return result;
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Add your logout API call here
      setUserDetails(initialState);
      toast.success('Logged out successfully', { position: 'top-center' });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to logout';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (data: Partial<User>) => {
    setLoading(true);
    try {
      // Add your update user API call here
      setUserDetails((prev) => ({
        ...prev,
        user: prev.user ? { ...prev.user, ...data } : null,
      }));
      toast.success('Profile updated successfully');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to update profile';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (token: string) => {
    setLoading(true);
    try {
      // Add your email verification API call here
      setUserDetails((prev) => ({
        ...prev,
        user: prev.user ? { ...prev.user, isEmailVerified: true } : null,
      }));
      toast.success('Email verified successfully');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to verify email';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const resendVerification = async () => {
    setLoading(true);
    try {
      // Add your resend verification API call here
      toast.success('Verification email sent');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Failed to resend verification';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    userDetails,
    setUserDetails,
    login,
    signup,
    logout,
    updateUser,
    verifyEmail,
    resendVerification,
    isLoading,
    setIsLoading,
    marketData,
    indexData,
    dominance,
    plan,
    setPlan
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
