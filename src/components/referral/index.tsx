import { motion } from 'framer-motion';
import { Share2, Gift } from 'lucide-react';
import { BalanceCard } from './components/balance-card';
import { ReferralLink } from './components/referral-link';
import { EmailInvite } from './components/email-invite';
import { ReferralsTable } from './components/referrals-table';
import { ReferralStats } from './components/referral-stats';
import { DashboardLayout } from '@/components/dashboard/layout';

export function ReferralProgram() {
  return (
     <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
    <div className="p-8">
      {/* Header Section */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
              <Gift className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold">Refer and Earn</h1>
          </div>
          <div className="flex items-center gap-2 text-gray-400 ml-12">
            <Share2 className="w-5 h-5" />
            <p className="text-lg">Get <span className="text-green-400 font-semibold">$50 USD</span> for every successful referral</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <ReferralStats />
          <div className="space-y-6">
            <ReferralLink />
            <EmailInvite />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Your Referrals</h2>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
                <option>All Time</option>
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            <ReferralsTable />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <BalanceCard />
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">How it works</h3>
            <div className="space-y-4">
              {[
                'Share your unique referral link with friends',
                'Friends sign up and subscribe to any plan',
                'You earn $50 USD for each successful referral',
                'Withdraw your earnings anytime'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm text-gray-400">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
     </DashboardLayout>
  );
}