import { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingHeader } from './pricing-header';
import { PricingToggle } from './pricing-toggle';
import { PricingGrid } from './pricing-grid';
import { PricingFAQ } from './pricing-faq';

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-32 px-6 overflow-hidden" id="pricing">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '32px 32px' }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <PricingHeader />
        <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
        <PricingGrid isYearly={isYearly} />
        <PricingFAQ />
      </div>
    </section>
  );
}