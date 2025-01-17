import { DashboardLayout } from '../dashboard/layout';
import { HistoryHeader } from './components/history-header';
import { StatsSummary } from './components/stats-summary';
import { SignalsTable } from './components/signals-table';
import { useEffect, useState } from 'react';
import { marketApi, tradingApi } from '@/services/api';

export function SignalsHistory() {
  const [analytics, setAnalytics] = useState([])
  const [history, setHistory] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true)
        const currentDate = new Date();
        const month = String(currentDate.getMonth() + 1).padStart(1, '0');
        const year = currentDate.getFullYear();
        const dateParam = `${month}-${year}`
        const [analyticsResponse, historyResponse] = await Promise.all([
          tradingApi.getAnalytics({ month: dateParam }),
          tradingApi.getHistory()
        ]);
        console
        if (analyticsResponse?.status) {
          setAnalytics(analyticsResponse.data);
        }

        if (historyResponse?.status) {
          setHistory(historyResponse.data);
        }
        setLoader(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        // handle error appropriately here (e.g., set an error state)
      }
    };

    fetchData();
  }, []);
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
        <HistoryHeader />
        <StatsSummary data={analytics} loader={loader} setAnalytics={setAnalytics} />

        {/* Signals Table */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">All signals</h2>

          <SignalsTable loader={loader} data={history} setHistory={setHistory} />
        </div>
      </div>
    </DashboardLayout>
  );
}