import api from '../axios';
import { API_ENDPOINTS } from './endpoints';
import { ApiResponse } from './types';

export const marketApi = {
  getMarket: () =>
    api.get<ApiResponse<any>>(API_ENDPOINTS.MARKET.MARKET_CAP),

  getIndex: () =>
    api.get<ApiResponse<any>>(API_ENDPOINTS.MARKET.INDEX),
  getDominance: () => api.get<ApiResponse<any>>(API_ENDPOINTS.MARKET.DOMINANCE),

};