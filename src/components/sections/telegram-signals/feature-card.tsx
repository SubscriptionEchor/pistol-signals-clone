import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="flex gap-4 group"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3366FF]/20 to-[#8B5CF6]/20 flex items-center justify-center group-hover:from-[#3366FF]/30 group-hover:to-[#8B5CF6]/30 transition-all duration-300">
          <Icon className="w-5 h-5 text-[#3366FF] group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1 group-hover:text-[#3366FF] transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}