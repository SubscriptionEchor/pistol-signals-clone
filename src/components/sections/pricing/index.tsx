import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Monthly",
    price: "$49",
    period: "/month",
    description: "Perfect for beginners",
    features: [
      "Daily trading signals",
      "Basic market analysis",
      "Email support",
      "Basic risk management",
      "Standard signal delivery"
    ]
  },
  {
    name: "Quarterly",
    price: "$129",
    period: "/quarter",
    description: "Most popular choice",
    isPopular: true,
    features: [
      "Premium trading signals",
      "Real-time market analysis",
      "Priority Telegram signals",
      "24/7 support access",
      "Advanced risk management",
      "Custom alert settings"
    ]
  },
  {
    name: "Yearly",
    price: "$399",
    period: "/year",
    description: "Best value for pros",
    features: [
      "VIP trading signals",
      "Advanced AI predictions",
      "Instant signal delivery",
      "1-on-1 consultation",
      "Custom risk parameters",
      "API access",
      "Priority support"
    ]
  }
];

export function Pricing() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-6 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#00D1FF]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
          style={{ backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent{' '}
            <span className="text-[#00D1FF]">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your trading needs. All plans include our core features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.isPopular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              
              <div className={`relative h-full backdrop-blur-sm rounded-xl p-8 transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-white/10 border border-white/20' 
                  : 'bg-white/5 border border-white/10'
              }`}>
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] rounded-full text-sm font-medium text-black">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00D1FF]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#00D1FF]" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.isPopular ? 'gradient' : 'secondary'}
                  className="w-full group"
                  onClick={() => navigate('/signin')}
                >
                  <span>Get Started</span>
                  {plan.isPopular && (
                    <Zap className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            7-day money-back guarantee • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}