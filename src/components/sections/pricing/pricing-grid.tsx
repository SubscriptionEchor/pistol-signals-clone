import { motion } from 'framer-motion';
import { PricingCard } from './pricing-card';
import { useMemo } from 'react';

interface PricingGridProps {
  isYearly: boolean;
}

export function PricingGrid({ isYearly }: PricingGridProps) {
  const plans = useMemo(() => [
    {
      name: "Monthly",
      description: "Perfect for beginners",
      price: isYearly ? 39 : 49,
      period: isYearly ? "/year" : "/month",
      features: [
        "Basic trading signals",
        "Market analysis",
        "Email support",
        "Basic risk management",
      ],
      cta: "Start Trading"
    },
    {
      name: "Quaterly",
      description: "Most popular choice",
      price: isYearly ? 79 : 99,
      period: isYearly ? "/year" : "/month",
      features: [
        "Advanced trading signals",
        "Real-time market analysis",
        "Priority telegram signals",
        "24/7 support",
        "Advanced risk management",
        "Custom alerts"
      ],
      isPopular: true,
      cta: "Upgrade to Pro"
    },
    {
      name: "Yearly",
      description: "For professional traders",
      price: isYearly ? 159 : 199,
      period: isYearly ? "/year" : "/month",
      features: [
        "Premium trading signals",
        "Advanced AI predictions",
        "VIP telegram channel",
        "1-on-1 consultation",
        "Custom risk parameters",
        "API access",
        "White-glove support"
      ],
      cta: "Contact Sales"
    }
  ], [isYearly]);

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {plans.map((plan, index) => (
        <PricingCard
          key={plan.name}
          {...plan}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
}