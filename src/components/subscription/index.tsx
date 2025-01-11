import { DashboardLayout } from '../dashboard/layout';
import { SubscriptionDetails } from './components/subscription-details';

export function Subscription() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="p-8">
          <SubscriptionDetails />
        </div>
      </div>
    </DashboardLayout>
  );
}