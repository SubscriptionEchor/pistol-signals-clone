import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "relative inline-block",
      // Add a subtle text shadow for better contrast
      "text-[#00D1FF] drop-shadow-[0_0_10px_rgba(0,209,255,0.5)]",
      className
    )}>
      {children}
    </span>
  );
}