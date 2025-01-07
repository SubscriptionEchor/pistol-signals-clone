import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { StatsCard } from './stats-card';
import { FeatureList } from './feature-list';
import { AnimatedGradient } from './animated-gradient';
import { useNavigate } from 'react-router-dom';

const stats = [
  { label: 'Active Users', value: '50,000+', trend: 12.5 },
  { label: 'Signal Accuracy', value: '99.2%', trend: 2.8 },
  { label: 'Total Volume', value: '$2.8B', trend: 15.4 },
  { label: 'Response Time', value: '<10ms', trend: -5.2 }
];

export function CTA() {
  const navigate = useNavigate()
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <AnimatedGradient />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Trading with{' '}
                <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Confidence
                </span>
                ?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Join thousands of traders who are already using our AI-powered platform to make data-driven decisions and maximize their profits.
              </p>
            </motion.div>

            <FeatureList />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={() => navigate('/dashboard')} variant="gradient" className="group">
                Try now free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button variant="secondary">
                View Live Demo
              </Button> */}
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatsCard
                  key={stat.label}
                  {...stat}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}