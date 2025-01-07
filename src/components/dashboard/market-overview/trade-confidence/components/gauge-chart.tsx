import GaugeChart from 'react-gauge-chart';
import { GAUGE_COLORS } from '../constants';
import type { GaugeChartProps } from '../types';

export function GaugeCharts({ value, size = 200, className = '' }: GaugeChartProps) {
  const getPercentage = (value) => {
    return (value - 0) / (100 - 0); // Normalize value to get a percentage
  };
  const percent = getPercentage(value)
  return (
    <div className={className} style={{ height: size / 2 }}>
      <GaugeChart
        id="trade-confidence-gauge"
        nrOfLevels={5}
        colors={GAUGE_COLORS}
        percent={percent}
        arcWidth={0.1}

        cornerRadius={10}
        textColor="transparent"
        needleColor="#fff"
        needleBaseColor="#fff"
        // animate={true}
        formatTextValue={() => ''}
        style={{
          width: 180,
          height: 150,
          filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.2))'
        }}
      />
    </div >
  );
}