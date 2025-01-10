import { DashboardLayout } from './layout';
import { MarketOverview } from './market-overview';
import { SignalsGrid } from './components/signals-grid';
import { TelegramConnection } from './telegram-connection';
import { SubscriptionOverlay } from './subscription-overlay';
import { useUser } from '@/lib/context/user';

export function Dashboard() {
  const { userDetails } = useUser();
  // Temporarily comment out subscription check
  // const hasValidSubscription = userDetails?.subscriptionEndDate && new Date(userDetails.subscriptionEndDate) > new Date();

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <main className="relative px-4 py-8 md:px-8 space-y-8">
          {/* Temporarily comment out subscription overlay */}
          {/* {!hasValidSubscription && (
            <SubscriptionOverlay 
              expiryDate={userDetails?.subscriptionEndDate} 
            />
          )} */}
          <div className="relative">
            <TelegramConnection />
            <MarketOverview />
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Active Signals</h2>
              </div>
              <SignalsGrid />
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}