import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn(
      "relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",
      "backdrop-blur-lg bg-black/20",
      className
    )}>
      {children}
    </div>
  );
}