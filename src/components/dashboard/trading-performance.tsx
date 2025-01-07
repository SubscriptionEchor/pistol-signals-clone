import { Card } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function TradingPerformance() {
  const data = [
    { date: '1/12', pnl: 2400 },
    { date: '2/12', pnl: 1398 },
    { date: '3/12', pnl: 9800 },
    { date: '4/12', pnl: 3908 },
    { date: '5/12', pnl: 4800 },
    { date: '6/12', pnl: 3800 },
    { date: '7/12', pnl: 4300 },
  ];

  return (
    <Card className="bg-[#111] border-white/5 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Trading Performance</h2>
        {/* <select className="bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-1.5 text-sm">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select> */}
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              stroke="#666"
              fontSize={12}
            />
            <YAxis
              stroke="#666"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Line
              type="monotone"
              dataKey="pnl"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}