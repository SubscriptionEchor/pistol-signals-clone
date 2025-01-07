import { useMemo } from 'react';
import { GAUGE_LEVELS } from '../constants';
import type { TradeConfidenceValue } from '../types';

export function useTradeConfidence(value: number): TradeConfidenceValue {
  return useMemo(() => {
    if (value <= 0.2) return { value, ...GAUGE_LEVELS.STRONG_SELL };
    if (value <= 0.4) return { value, ...GAUGE_LEVELS.SELL };
    if (value <= 0.6) return { value, ...GAUGE_LEVELS.NEUTRAL };
    if (value <= 0.8) return { value, ...GAUGE_LEVELS.BUY };
    return { value, ...GAUGE_LEVELS.STRONG_BUY };
  }, [value]);
}