import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useOnboarding } from '../context/onboarding-context';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "Monthly",
    price: "$49",
    period: "/month",
    description: "Perfect for beginners",
    features: [
      "Basic trading signals",
      "Market analysis",
      "Email support",
      "Basic risk management"
    ]
  },
  {
    name: "Quarterly",
    price: "$129",
    period: "/quarter",
    description: "Most popular choice",
    isPopular: true,
    features: [
      "Advanced trading signals",
      "Real-time market analysis",
      "Priority telegram signals",
      "24/7 support",
      "Advanced risk management",
      "Custom alerts"
    ]
  },
  {
    name: "Yearly",
    price: "$399",
    period: "/year",
    description: "Best value for professionals",
    features: [
      "Premium trading signals",
      "Advanced AI predictions",
      "VIP telegram channel",
      "1-on-1 consultation",
      "Custom risk parameters",
      "Priority API access"
    ]
  }
];

export function PlanSelection() {
  const { updateState } = useOnboarding();

  return (
    <div className="w-full max-w-6xl p-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Choose your plan</h2>
        <p className="text-gray-400">Select the plan that best fits your trading needs</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group ${plan.isPopular ? 'md:-mt-4 md:mb-4' : ''}`}
          >
            <div className="absolute -inset-[1px] bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            
            <div className={`relative h-full backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 ${
              plan.isPopular 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/5 border border-white/10'
            }`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'gradient' : 'secondary'}
                className="w-full"
                onClick={() => updateState({ selectedPlan: plan.name })}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}