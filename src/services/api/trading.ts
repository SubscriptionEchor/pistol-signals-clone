import api from '../axios';
import { API_ENDPOINTS } from './endpoints';
import { ApiResponse, TradingSignal } from './types';

export const tradingApi = {
  getActiveSignals: () => api.get<ApiResponse<TradingSignal[]>>(API_ENDPOINTS.TRADING.ACTIVE),
  getAnalytics: (data: any) => {
    return api.get<ApiResponse>(API_ENDPOINTS.TRADING.ANALYTICS, { params: data })
  },

  getHistory: (params: { page: number; limit: number }) =>
    api.get<ApiResponse<TradingSignal[]>>(API_ENDPOINTS.TRADING.HISTORY, { params }),
};