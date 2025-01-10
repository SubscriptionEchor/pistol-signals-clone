import { motion } from 'framer-motion';
import { GaugeCharts } from './components/gauge-chart';
import { ConfidenceLabel } from './components/confidence-label';
import { useTradeConfidence } from './hooks/useTradeConfidence';
import React, { useEffect, useState } from 'react';
import { marketApi } from '@/services/api';
import { useUser } from '@/lib/context/user';

function TradeConfidence() {
  const { indexData: data } = useUser()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative bg-[#111] rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-medium mb-1">Fear and greed index</h3>
        {data?.score ? <div className="flex flex-col items-center">
          <GaugeCharts
            value={data.score}
            size={120}
            className="mb-2.5"
          />
          <ConfidenceLabel confidence={{ label: data.name, score: data?.score }} />
        </div> : null}
      </div>
    </motion.div>
  );
}

export default React.memo(TradeConfidence);