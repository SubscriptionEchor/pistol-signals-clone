import { Card } from '../ui/card';
import { SignalCard } from '../trading/signal-card';

export function ActiveSignals() {
  const signals = [
    {
      coin: 'Bitcoin',
      timestamp: 'Today, 14:45 UTC',
      type: 'Long' as const,
      entry: ['$51,283', '$50,478', '$49,792'],
      exit: ['$65,792', '$66,890', '$68,990'],
      stopLoss: '1%',
      leverage: '4x'
    },
    // Add more signals as needed
  ];

  return (
    <Card className="bg-[#111] border-white/5 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Active Signals</h2>
        {/* <button className="text-sm text-blue-400 hover:text-blue-300">
          View All
        </button> */}
      </div>

      <div className="space-y-4">
        {signals.map((signal, index) => (
          <SignalCard key={index} {...signal} />
        ))}
      </div>
    </Card>
  );
}