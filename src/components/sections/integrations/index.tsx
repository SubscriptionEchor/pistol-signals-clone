import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Al Suwaidi",
    role: "Day Trader",
    content: "As someone trading daily, the quick signal delivery is exactly what I needed. The signals make my trades more profitable, and the real-time updates keep me ahead in the market."
  },
  {
    name: "Omar Abdullah",
    role: "Crypto Trader",
    content: "This platform has simplified trading with timely updates and spot-on signals. It's boosted my confidence and success rate — truly a game-changer."
  },
  {
    name: "Fatima Al Suwaidi",
    role: "Entrepreneur",
    content: "I trade on the side, and Pistol Signals makes it incredibly simple. The real-time updates are invaluable for someone with a busy schedule."
  }
];

export function Integrations() {
  return (
    <section className="relative py-32 px-6 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/assets/images/hero-bg.png)' }}
        />
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
            Trusted by Traders Worldwide
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied traders who have improved their trading with our signals
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              
              <div className="relative bg-[#111] rounded-xl p-8 border border-[#222] hover:bg-[#161616] transition-colors h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-8">
                  <Quote className="w-8 h-8 text-[#00D1FF]/20" />
                </div>

                {/* Review Content */}
                <p className="text-gray-400 mb-6 relative flex-grow">
                  "{review.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00D1FF] text-[#00D1FF]" />
                  ))}
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(/assets/images/hero-bg.png)' }}
                  />
                  <div>
                    <h4 className="font-medium text-white">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}