import { motion } from 'framer-motion';
import { Brain, Target, BarChart2 } from 'lucide-react';

export function Features() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black" id="features">
      <div className="absolute inset-0 bg-gradient-radial from-[#222]/50 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Remember anything.<br className="hidden sm:block" />
            Just ask a question.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Our AI assistant helps you track and analyze market movements with ease
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Brain,
              title: "Remember anything",
              description: "Our AI assistant helps you track and analyze market movements with ease",
              image: "/assets/images/hero-bg.png"
            },
            {
              icon: Target,
              title: "Just ask a question",
              description: "Get instant answers about market trends, signals, and analysis",
              image: "/assets/images/hero-bg.png"
            },
            {
              icon: BarChart2,
              title: "More answers",
              description: "Access comprehensive market insights and trading recommendations",
              image: "/assets/images/hero-bg.png"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-[#333] transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] z-10" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#222] group-hover:bg-[#333] transition-colors">
                      <feature.icon className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}