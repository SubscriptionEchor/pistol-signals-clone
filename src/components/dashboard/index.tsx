import { DashboardLayout } from './layout';
import { MarketOverview } from './market-overview';
import { SignalsGrid } from './components/signals-grid';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { TelegramConnection } from './telegram-connection';

export function Dashboard() {

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <main className="px-4 py-8 md:px-8 space-y-8">
          {/* Market Overview Section */}
          <TelegramConnection />
          <MarketOverview />

          {/* Active Signals Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Active Signals</h2>
              {/* <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                View All
              </button> */}
            </div>
            <SignalsGrid />
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}