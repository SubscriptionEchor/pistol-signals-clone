import GaugeChart from 'react-gauge-chart';

interface GaugeChartProps {
  value: number;
}

export function GaugeChart({ value }: GaugeChartProps) {
  return (
    <GaugeChart
      id="trade-confidence-gauge"
      nrOfLevels={3}
      colors={[
        '#ef4444', // Red for Sell
        '#eab308', // Yellow for Neutral
        '#22c55e'  // Green for Buy
      ]}
      percent={value}
      arcWidth={0.3}
      cornerRadius={0}
      textColor="transparent"
      needleColor="#fff"
      needleBaseColor="#fff"
      animate={true}
      formatTextValue={() => ''}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '300px',
        margin: '0 auto',
        filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.2))'
      }}
    />
  );
}