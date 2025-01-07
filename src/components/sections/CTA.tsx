import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: 0,
          }}
          animate={{
            y: [null, '-100%'],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export function CTA() {
  const navigate = useNavigate()
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        style={{ backgroundSize: '32px 32px' }}
      />
      <Particles />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Gradient border effect */}
          {/* <div className="absolute -inset-[1px] bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" /> */}

          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 hover:bg-white/[0.07] transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Ready to Start Trading{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Smarter
                  </span>
                  ?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-lg mb-8"
                >
                  Join thousands of traders who are already using our AI-powered
                  platform to make data-driven decisions.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    onClick={() => navigate('/dashboard')}
                    variant="gradient"
                    className="group bg-gradient-primary"
                  >
                    <span>Try Now Free</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  {/* <Button variant="secondary">Watch Demo</Button> */}
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Active Users', value: '50,000+' },
                  { label: 'Signal Accuracy', value: '99.2%' },
                  { label: 'Total Volume', value: '$2.8B' },
                  { label: 'Response Time', value: '<10ms' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/[0.07] transition-colors duration-300"
                  >
                    <div className="text-sm text-gray-400 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
