import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  error,
  ...props
}, ref) => {
  return (
    <div className="relative">
      <input
        ref={ref}
        className={cn(
          'w-full rounded-lg bg-white/5 px-4 py-2 text-white placeholder-gray-400',
          'border border-white/10 focus:border-blue-500 focus:outline-none',
          'transition-colors duration-200',
          { 'border-red-500': error },
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';