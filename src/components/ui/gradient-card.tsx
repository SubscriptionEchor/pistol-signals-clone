import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  isPopular?: boolean;
}

export function GradientCard({
  children,
  className,
  isPopular,
}: GradientCardProps) {
  return (
    <motion.div className={cn('relative group h-full', className)}>
      {/* Subtle gradient border effect */}
      <div
        className={cn(
          'absolute -inset-[0.5px] rounded-xl transition-all duration-300',
          'bg-gradient-to-r from-[#4F46E5]/10 to-[#8B5CF6]/10',
          'opacity-0 group-hover:opacity-100',
          'blur-[2px] group-hover:blur-[3px]',
          isPopular && 'opacity-50'
        )}
      />

      <div
        className={cn(
          'relative h-full backdrop-blur-sm rounded-xl',
          'bg-white/5 border border-white/10',
          'transition-all duration-300',
          'hover:bg-white/[0.07]',
          'hover:border-white/20',
          isPopular && 'bg-white/10 border-white/20'
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}