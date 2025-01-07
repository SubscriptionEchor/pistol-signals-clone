import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, iconColor, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-2xl bg-white/5 p-6 hover:bg-white/[0.07] transition-all duration-300"
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-px bg-gradient-primary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative">
        <div className={`w-12 h-12 rounded-xl ${iconColor} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}