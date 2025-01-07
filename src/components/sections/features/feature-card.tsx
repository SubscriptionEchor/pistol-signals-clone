import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  delay?: number;
}

export function FeatureCard({ title, description, icon: Icon, iconColor, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] p-6 transition-all duration-300 hover:bg-[#242424]"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-2 rounded-xl ${iconColor} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}