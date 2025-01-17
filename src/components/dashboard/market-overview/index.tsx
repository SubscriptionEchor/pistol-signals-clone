import { motion } from 'framer-motion';
import MarketStats from './market-stats';
import { GainersLosers } from './gainers-losers';
import TradeConfidence from './trade-confidence';
import { useEffect, useState } from 'react';
// import { TradeConfidence } from './trade-confidence';
import { SOCKET_API } from "@/services/wsServices"
import { useUser } from '@/lib/context/user';

export function MarketOverview() {
  const [gainersData, setGainersData] = useState([])
  const [losersData, setLosersData] = useState([])
  useEffect(() => {
    SOCKET_API.binance(wsData => {

      if (!wsData || !wsData?.length) {
        return
      }
      const GData = wsData?.filter(ticker => ticker.P >= 0).sort((a, b) => b.P - a.P).slice(0, 5)
      const LData = wsData?.filter(ticker => ticker.P < 0).sort((a, b) => a.P - b.P).slice(0, 3)
      if (GData?.length) {
        setGainersData(GData)
      }
      if (LData?.length) {
        setLosersData(LData)
      }
    })
  }, [])
  return (
    <div className="space-y-6 mt-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-xl font-bold">Market Overview</h2>
        {/* <select className="bg-[#111] border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary">
          <option>24h</option>
          <option>7d</option>
          <option>30d</option>
        </select> */}
      </motion.div>

      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Gainers & Losers */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GainersLosers data={gainersData} type="gainers" />
            <GainersLosers data={losersData} type="losers" />
          </div>
        </div>

        {/* Right Column - Stats & Confidence */}
        <div className="space-y-4">
          <MarketStats />
          <TradeConfidence />
        </div>
      </div>
    </div>
  );
}