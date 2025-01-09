import { motion } from 'framer-motion';
import { Brain, Target, BarChart2 } from 'lucide-react';

export function Features() {
  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-[#222]/50 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Remember anything.<br />
            Just ask a question.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our AI assistant helps you track and analyze market movements with ease
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Remember anything",
              description: "Our AI assistant helps you track and analyze market movements with ease",
              image: "/demo-1.png"
            },
            {
              icon: Target,
              title: "Just ask a question",
              description: "Get instant answers about market trends, signals, and analysis",
              image: "/demo-2.png"
            },
            {
              icon: BarChart2,
              title: "More answers",
              description: "Access comprehensive market insights and trading recommendations",
              image: "/demo-3.png"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-[#333] transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] z-10" />
                  <div className="absolute inset-0 bg-[#161616] animate-pulse" /> {/* Placeholder */}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#222] group-hover:bg-[#333] transition-colors">
                      <feature.icon className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/0 to-[#00FFFF]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}