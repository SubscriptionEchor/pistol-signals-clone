import { motion } from 'framer-motion';

export function VideoPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative w-full max-w-2xl mx-auto mt-16"
    >
      {/* Video Container */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10">
        {/* Trading Interface Preview */}
        <div className="absolute inset-0 p-4">
          <div className="h-full rounded-lg bg-black/40 p-4">
            {/* Chart Preview */}
            <div className="h-2/3 mb-4 rounded-lg bg-black/40 flex items-center justify-center">
              <div className="w-full h-32 flex items-end space-x-1 px-4">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-blue-500/40"
                    initial={{ height: '20%' }}
                    animate={{ height: `${Math.random() * 100}%` }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Trading Controls */}
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 rounded-lg bg-black/40" />
              ))}
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-10 blur-xl opacity-50" />
    </motion.div>
  );
}