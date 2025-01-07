import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Standard',
    commission: '30%',
    earnings: 'Up to $500/month',
    requirements: [
      'Valid email verification',
      'Complete profile',
      'Minimum 1 referral'
    ]
  },
  {
    name: 'Premium',
    commission: '35%',
    earnings: 'Up to $2000/month',
    requirements: [
      '5+ active referrals',
      'Consistent performance',
      'Quality traffic'
    ],
    isPopular: true
  },
  {
    name: 'Elite',
    commission: '40%',
    earnings: '$2000+/month',
    requirements: [
      '20+ active referrals',
      'High conversion rate',
      'Dedicated support'
    ]
  }
];

export function CommissionTiers() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Commission Tiers</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The more you refer, the more you earn. Unlock higher commission rates as you grow your referrals.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative group ${tier.isPopular ? 'md:-mt-4 md:mb-4' : ''}`}
          >
            <div className="absolute -inset-[1px] bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            
            <div className={`relative h-full backdrop-blur-sm rounded-xl p-8 transition-all duration-300 ${
              tier.isPopular 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/5 border border-white/10'
            }`}>
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                  {tier.commission}
                </div>
                <div className="text-sm text-gray-400">{tier.earnings}</div>
              </div>

              <div className="space-y-4">
                {tier.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-sm text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}