import { CurrentPlan } from './components/current-plan';
import { BillingHistory } from './components/billing-history';
import { DashboardLayout } from '@/components/dashboard/layout';

export function Subscription() {
  return (
     <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
    <div className="p-8 space-y-12">
      <CurrentPlan />
      <BillingHistory />
    </div>
      </div>
     </DashboardLayout>
  );
}