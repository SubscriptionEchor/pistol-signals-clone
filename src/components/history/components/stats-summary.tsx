import { tradingApi } from '@/services/api';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

const StatCard = ({ title, children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-[#111] rounded-xl-xl p-6 ${className}`}
  >
    <h2 className="text-lg font-medium text-gray-400 mb-4">{title}</h2>
    {children}
  </motion.div>
);

export function StatsSummary({ data, setAnalytics, loader }) {
  const [selectedMonth, setSelectedMonth] = useState(''); // Default month
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth()  // Adding 1 because months are 0-indexed
    const year = currentDate.getFullYear();
    const dateParam = `${months[month]}-${year}`
    setSelectedMonth(dateParam)
  }, [])
  function generateMonthStrings() {

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-11
    const currentYear = currentDate.getFullYear();
    const result = [];

    const startMonth = 7; // August (0-based index)
    const startYear = 2024; // Fixed start year

    // Add months from August 2024 first
    for (let i = startMonth; i < months.length; i++) {
      result.push(`${months[i]}-${startYear}`);
    }

    // If we're in 2025, add months from January up to current month
    if (currentYear === 2025) {
      for (let i = 0; i <= currentMonth; i++) {
        result.push(`${months[i]}-${currentYear}`);
      }
    }

    return result;
  }


  const onSelect = async (value) => {
    if (value == selectedMonth) {
      return
    }
    setSelectedMonth(value)
    let getIndex = value?.split('-')
    let monthInd = months.indexOf(getIndex[0])

    let res = await tradingApi.getAnalytics({ month: monthInd + 1 + '-' + getIndex[1] })
    if (res?.status) {
      setAnalytics(res?.data)
    }

  }
  const Shimmer1: React.FC = () => (
    <div className="relative bg-[#111] rounded-xl p-6 animate-pulse">
      <div className="h-5 bg-zinc-800 py-3 rounded-md mb-4 w-1/3" />
      <div className='flex justify-between items-center mb-5'>
        <div className="h-5 px-12 py-4 bg-zinc-800 rounded-md  " />
        <div className="h-5 px-16 py-5 bg-zinc-800 rounded-md  " />
      </div>
      <div className='flex justify-between items-center mb-5'>
        <div className="h-5 px-12 py-4 bg-zinc-800 rounded-md  " />
        <div className="h-5 px-16 py-5 bg-zinc-800 rounded-md " />
      </div>
      <div className="h-5 bg-zinc-800 rounded-md  mb-5 w-1/2" />
      <div className="h-5 bg-zinc-800 rounded-md  mb-5  w" />
      <div className="h-14 w-1/2 bg-zinc-800 rounded-md " />
    </div>
  );
  const Shimmer2: React.FC = () => (
    <div className="relative bg-[#111] rounded-xl p-6  animate-pulse">
      <div className="h-5 bg-zinc-800 rounded-md  mb-4 w-1/3 mb-8" />
      <div className="h-5 bg-zinc-800 rounded-md  mb-4 w-1/4" />
      <div className="h-5 bg-zinc-800 rounded-md  w-1/4" />
    </div>
  );
  const Shimmer3: React.FC = () => (
    <div className="relative bg-[#111] rounded-xl p-6 animate-pulse">
      <div className="h-5 bg-zinc-800 rounded-md mb-4 w-1/3 mb-8" />
      <div className='flex justify-between items-center '>
        <div className="h-5 px-12 py-7 bg-zinc-800 rounded-md  " />
        <div className="h-5 px-16 py-7 bg-zinc-800 rounded-md  " />
      </div>
    </div>
  );
  const Shimmer4: React.FC = () => (
    <div className="relative bg-[#111] rounded-xl p-6 animate-pulse">
      <div className="h-5 bg-zinc-800 rounded-md  mb-4 w-1/3" />
      <div className="h-5 bg-zinc-800 rounded-md  mb-4 w-1/4" />
      <div className="h-5 bg-zinc-800 rounded-md  mb-3 w-1/4" />
    </div>
  );
  const Shimmer5: React.FC = () => (
    <div className="relative bg-[#111] rounded-xl p-6 animate-pulse">
      <div className="h-5 bg-zinc-800 rounded-md  mb-3 w-1/2" />
      <div className="h-10 w-1/2 bg-zinc-800 rounded-md " />
    </div>
  );
  return (
    <div className="relative mb-12">

      <div className="flex  items-center justify-end mb-4">
        <label className="text-gray-400 mr-2">Select Month:</label>
        <select

          value={selectedMonth}
          onChange={(e) => onSelect(e?.target?.value)}
          className="bg-[#111] text-white text-sm border border-gray-600 rounded p-2 cursor-pointer"
        >
          {/* <div className=" left-0 mt-1 w-full max-h-400 overflow-y-auto bg-[#111] border border-gray-600 rounded-xl shadow-lg z-10"> */}

          {generateMonthStrings()?.map((month) => (
            <option
              key={month} value={month}>
              {month}
            </option>
          ))}
          {/* </div> */}
        </select>
      </div >

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
      >

        {!loader ?
          < StatCard title="Summary">
            <div className="space-y-6">
              <div className="flex justify-between items-baseline">
                <span className="text-gray-400">Overall Trades</span>
                <span className="text-2xl font-bold">{data?.summary?.overall_trades}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-gray-400">Overall profit</span>
                <div className="flex items-center gap-1">
                  <ArrowUpRight className="text-green-500 w-4 h-4" />
                  <span className="text-2xl font-bold text-green-500">${data?.summary?.overall_profit}</span>
                </div>
              </div>
              <div>
                <span className="text-gray-400 block mb-2">Market Risk</span>
                <div className="text-yellow-400 font-medium">{data?.summary?.market_risk}</div>
              </div>
              <div>
                <span className="text-gray-400 block mb-2">Most profitable coins</span>
                <div className="flex gap-2">
                  {data?.summary?.most_profitable_coins?.map((coin, index) => (
                    <div
                      key={coin}
                      style={{ marginLeft: index > 0 ? -15 : 0 }}
                      className="w-8 h-8  rounded-full flex items-center justify-center text-xs font-medium"
                    >
                      <img className='rounded-full' src={coin} alt={coin} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StatCard> : <Shimmer1 />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {!loader ? <StatCard title="Total Trades" delay={0.1}>
            <div>
              <div className="text-3xl font-bold mb-2">{data?.monthly_stats?.total_trades}</div>
              <div className="text-gray-400">This month</div>
            </div>
          </StatCard> : <Shimmer2 />}


          {/* Trade Ratio Card */}
          {!loader ? <StatCard title="Trade Ratio" delay={0.2}>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-bold mb-1">{data?.monthly_stats?.trade_ratio?.profit?.percentage}%</div>
                <div className="text-green-500 text-sm">{data?.monthly_stats?.trade_ratio?.profit?.count} Trades</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-1">{data?.monthly_stats?.trade_ratio?.loss?.percentage}%</div>
                <div className="text-red-500 text-sm">{data?.monthly_stats?.trade_ratio?.loss?.count} Trades</div>
              </div>
            </div>
          </StatCard> : <Shimmer3 />}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {!loader ? <StatCard title="Win rate" delay={0.3}>
            <div>
              <div className="text-3xl font-bold mb-2">{data?.monthly_stats?.win_rate}%</div>
              <div className="text-gray-400">This month</div>
            </div>
          </StatCard> : <Shimmer4 />}

          {/* Profit Card */}
          {!loader ? <StatCard title="Profit (Current month)" delay={0.4}>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="text-green-500 w-6 h-6" />
              <div className="text-2xl font-bold text-green-500">{data?.monthly_stats?.total_return}% Total Return</div>
            </div>
          </StatCard> : <Shimmer5 />}
        </div>
      </div>
    </div >
  );
}