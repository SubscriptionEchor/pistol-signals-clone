import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { commonApi } from '@/services/api/common';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '@/routes/routenames';
import { useUser } from '@/lib/context/user';


export function Pricing() {
  const { setPlan } = useUser()
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      let result = await commonApi.plan()
      if (result?.status) {
        setData(result?.data?.sort((a, b) => a.days - b.days))
      }
    })()
  }, [])
  const onClick = (plan: any) => {
    setPlan(plan)
    navigate(ROUTE_NAMES.DASHBOARD)
  }
  return (
    <Section id="pricing" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        style={{ backgroundSize: '32px 32px' }}
      />

      <div className="relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Simple, Transparent{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Choose the plan that best fits your trading needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {data?.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group 
                
                `}
            >
              {/* ${plan.isPopular ? 'md:-mt-4 md:mb-4' : ''} */}
              {/* Card content */}
              <div
                className={`relative rounded-2xl p-8 transition-colors duration-300 flex flex-col h-full ${plan.isPopular
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-white/5 border border-white/10'
                  } hover:bg-white/[0.15]`}
              >
                {plan?.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl  font-bold">${plan.price}</span>
                  <span className="text-gray-400">/{plan.duration}</span>

                </div>
                <ul className="space-y-4 mb-8 flex-grow"> {/* Add flex-grow here to allow flexibility */}
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
                  onClick={() => onClick(plan)}
                  variant="gradient"
                  className="w-full mt-auto" // Ensure button stays at bottom
                >
                  Try Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}