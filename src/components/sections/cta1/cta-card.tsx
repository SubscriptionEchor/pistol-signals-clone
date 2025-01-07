import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/button';

const benefits = [
  'Access to real-time trading signals',
  'AI-powered market analysis',
  'Risk management tools',
  '24/7 expert support',
];

export function CTACard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-end/20 blur-3xl" />
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Trading{' '}
              <span className="bg-gradient-to-r from-primary to-primary-end bg-clip-text text-transparent">
                Smarter
              </span>
              ?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of traders who are already using our AI-powered
              platform to make data-driven decisions.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button variant="gradient" className="group">
              <span>Try Now Free</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
            <div className="relative bg-white/5 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Current Plan</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                  Free Trial
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-primary-end rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">7 days remaining</span>
                  <span className="text-gray-400">30 days total</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Signal Accuracy</span>
                  <span className="text-green-400">99.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Active Traders</span>
                  <span className="text-primary">50,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
