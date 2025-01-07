```tsx
import { forwardRef, InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, description, id, className = '', ...props }, ref) => {
    const fieldId = id || `field-${label?.toLowerCase().replace(/\s+/g, '-')}`;
    const descriptionId = `${fieldId}-description`;
    const errorId = `${fieldId}-error`;

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={fieldId}
            className="block text-sm font-medium text-gray-200"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={fieldId}
          aria-describedby={`${description ? descriptionId : ''} ${
            error ? errorId : ''
          }`.trim()}
          aria-invalid={!!error}
          className={`w-full px-4 py-3 bg-white/5 border ${
            error ? 'border-red-500' : 'border-gray-800'
          } rounded-lg focus:outline-none focus:border-primary transition-colors ${className}`}
          {...props}
        />
        {description && (
          <p id={descriptionId} className="text-sm text-gray-400">
            {description}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
```