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
          'relative bg-gradient-to-r from-[#00D1FF] via-[#00FFFF] to-[#00D1FF] text-black font-semibold hover:opacity-90 shadow-[0_0_20px_rgba(0,209,255,0.3)]': variant === 'gradient',
          'bg-white/10 text-white hover:bg-white/20': variant === 'secondary',
          'bg-[#00D1FF] text-black font-semibold hover:bg-[#00FFFF]': variant === 'primary',
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