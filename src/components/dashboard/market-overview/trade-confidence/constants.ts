export const GAUGE_LEVELS = {
  STRONG_SELL: { value: 0.2, label: 'Strong Sell', color: '#ef4444' },
  SELL: { value: 0.4, label: 'Sell', color: '#f87171' },
  NEUTRAL: { value: 0.6, label: 'Neutral', color: '#eab308' },
  BUY: { value: 0.8, label: 'Buy', color: '#4ade80' },
  STRONG_BUY: { value: 1.0, label: 'Strong Buy', color: '#22c55e' }
} as const;

export const GAUGE_COLORS = [
  GAUGE_LEVELS.STRONG_SELL.color,
  GAUGE_LEVELS.SELL.color,
  GAUGE_LEVELS.NEUTRAL.color,
  GAUGE_LEVELS.BUY.color,
  GAUGE_LEVELS.STRONG_BUY.color
];