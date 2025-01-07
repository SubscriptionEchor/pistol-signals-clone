import { GradientCard } from '@/components/ui/gradient-card';
import { motion } from 'framer-motion';
import { Share2, Users, DollarSign, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Share2,
    title: 'Share Your Link',
    description: 'Get your unique referral link and share it with your audience'
  },
  {
    icon: Users,
    title: 'Refer Users',
    description: 'Your referrals sign up and subscribe to our trading signals'
  },
  {
    icon: DollarSign,
    title: 'Earn Commission',
    description: 'Earn 30% commission on every successful referral'
  },
  {
    icon: Rocket,
    title: 'Grow Together',
    description: 'Scale your earnings as your referrals grow'
  }
];

export function HowItWorks() {
  return (
    <div className="space-y-12" id='how-it-works'>
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Start earning in four simple steps. Our affiliate program is designed to be straightforward and rewarding.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group text-center"
          >
            {/* <div className="absolute -inset-[1px] bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" /> */}
            <GradientCard>
              <div className="relative bg-white/1 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                    <step.icon className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
                )}
              </div>
            </GradientCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}