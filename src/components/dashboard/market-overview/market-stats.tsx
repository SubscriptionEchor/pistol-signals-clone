import { useUser } from '@/lib/context/user';
import { calculatePercentageChange, formatMarketCap } from '@/lib/utils';
import { marketApi } from '@/services/api';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, LineChart, Tooltip, Line } from 'recharts';

// Shimmer Component
const Shimmer: React.FC = () => {
  return (
    <div className="relative rounded-xl p-5 bg-[#111] border border-white/10 animate-pulse">
      <div className="flex items-center justify-between mb-2">
        <div className="w-1/3 h-5 bg-zinc-700 rounded-md"></div>
        <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
          <div className="w-4 h-4 bg-zinc-700 rounded-md"></div>
          <div className="w-16 h-4 bg-zinc-700 rounded-md"></div>
        </div>
      </div>
      <div className="h-8 bg-zinc-700 rounded mb-4 w-1/2"></div>
      <div className="h-20 w-full bg-zinc-700 rounded-md"></div>
    </div>
  );
};

const MarketStats = () => {
  const { marketData: data } = useUser()
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     let result = await marketApi.getMarket();
  //     if (result?.status) {
  //       result = result?.data.map((item: any) => {
  //         return {
  //           name: new Date(item.timestamp * 1000).toLocaleString(),
  //           value: item.marketCap,
  //           volume: item.volume
  //         };
  //       });
  //       setData(result);
  //     }
  //     setLoading(false); // Set loading to false after data is fetched
  //   })();
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {data?.length > 0 && <div className="relative bg-[#111] rounded-xl p-5 border border-white/10">
        {/* {loading ? (
          <Shimmer />
        ) : ( */}
        {/* <> */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">Total Market Cap</h3>
          <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-sm font-medium">
              {calculatePercentageChange(Number(data[data?.length - 2]?.value), Number(data[data?.length - 1]?.value))}%
            </span>
          </div>
        </div>
        <div className="text-3xl font-bold mb-4">${formatMarketCap(Number(data[data?.length - 1]?.value))}</div>
        <ResponsiveContainer width="100%" height={40}>
          <LineChart data={data} margin={{ bottom: 0, top: 10, right: 1, left: 1 }}>
            <Tooltip content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className='bg-[#000000]'>
                    <p className='text-xs'>Market Cap: {payload[0].payload.value.toFixed(2)}</p>
                    <p className='text-xs'>Volume: {payload[0].payload.volume.toFixed(2)}</p>
                  </div>
                );
              }
              return null;
            }} />
            <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>

      </div>}
    </motion.div>
  );
};

export default React.memo(MarketStats);