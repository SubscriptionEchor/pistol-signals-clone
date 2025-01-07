import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/dashboard/layout';
import { AffiliateHero } from './sections/affiliate-hero';
import { AffiliateStats } from './sections/affiliate-stats';
// import { CommissionTiers } from './sections/commission-tiers';
import { HowItWorks } from './sections/how-it-works';
import { AffiliateFAQ } from './sections/affiliate-faq';

export function Affiliation() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
          <AffiliateHero />
          <AffiliateStats />
          {/* <CommissionTiers /> */}
          <HowItWorks />
          <AffiliateFAQ />
        </div>
      </div>
    </DashboardLayout>
  );
}
