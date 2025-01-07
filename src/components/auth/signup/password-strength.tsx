```tsx
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const requirements = [
    { label: '8 characters', met: password.length >= 8 }
  ];

  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-400">Password must contain:</p>
      <div className="space-y-2">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              req.met ? 'bg-green-500' : 'bg-gray-800'
            }`}>
              <motion.div
                initial={false}
                animate={{ scale: req.met ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Check className="w-3 h-3 text-white" />
              </motion.div>
            </div>
            <span className={req.met ? 'text-white' : 'text-gray-500'}>
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```