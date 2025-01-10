import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { commonApi } from '@/services/api/common';

export function PricingPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let result = await commonApi.plan();
      if (result?.status) {
        setData(result?.data?.sort((a, b) => a.days - b.days));
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <img src="/assets/images/nav-logo.png" alt="Pistol Signals" className="h-8" />
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            Back to home
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that best fits your trading needs. All plans include our core features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] rounded-full text-sm font-medium text-black">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold line-through">{plan.price}</span>
                      <span className="text-gray-400">/{plan.duration}</span>
                      <span className="inline-flex ms-2 items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Your Free Week
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="gradient"
                    className="w-full"
                    onClick={() => navigate('/checkout', { 
                      state: { 
                        plan: {
                          id: index,
                          name: plan.name,
                          price: plan.price,
                          period: plan.duration
                        }
                      }
                    })}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}