import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isHoverable?: boolean;
}

export function Card({ className, children, isHoverable = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={isHoverable ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-white/5 to-white/[0.02]",
        "border border-white/10",
        "backdrop-blur-xl",
        "shadow-[0_8px_16px_rgba(0,0,0,0.5)]",
        className
      )}
      {...props}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}