import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OTPInputProps {
  value: string[];
  onChange: (otp: string[]) => void;
  isError?: boolean;
}

export function OTPInput({ value, onChange, isError }: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInput = (index: number, inputValue: string) => {
    const newOTP = [...value];
    newOTP[index] = inputValue;
    onChange(newOTP);

    // Auto-focus next input
    if (inputValue && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      // Focus previous input on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {[...Array(6)].map((_, index) => (
        <motion.input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          maxLength={1}
          value={value[index] || ''}
          onChange={e => handleInput(index, e.target.value.replace(/[^0-9]/g, ''))}
          onKeyDown={e => handleKeyDown(index, e)}
          className={`w-12 h-14 text-center text-xl font-bold bg-white/5 border ${
            isError ? 'border-red-500' : 'border-white/10'
          } rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        />
      ))}
    </div>
  );
}