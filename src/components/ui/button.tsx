import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  ...props
}, ref) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Add ripple effect or other click animations here if needed
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300',
        {
          'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90': variant === 'gradient',
          'bg-white/10 text-white hover:bg-white/20': variant === 'secondary',
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';