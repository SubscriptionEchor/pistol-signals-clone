import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConnectFormProps {
  onSubmit: (handle: string) => void;
}

export function ConnectForm({ onSubmit }: ConnectFormProps) {
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');

  const validateHandle = (value: string) => {
    if (!value) return 'Required';
    if (value.includes(' ')) return 'No spaces allowed';
    if (value.length < 3) return 'Min 3 characters';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateHandle(handle);
    if (validationError) {
      setError(validationError);
      return;
    }
    onSubmit(handle);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <div className="relative">
          <input
            type="text"
            value={handle}
            onChange={(e) => {
              setHandle(e.target.value);
              setError('');
            }}
            placeholder="@yourusername"
            className={`w-full px-3 py-2 text-sm bg-white/5 border ${
              error ? 'border-red-500' : 'border-white/10'
            } rounded-md focus:outline-none focus:border-blue-500 transition-colors`}
          />
          {error && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-xs text-red-500">{error}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          type="submit"
          variant="gradient"
          className="text-sm py-2"
        >
          Connect Telegram
        </Button>
        <ul className="flex gap-4 text-xs text-gray-400">
          <li className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            Instant signals
          </li>
          <li className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-purple-400" />
            Market updates
          </li>
        </ul>
      </div>
    </form>
  );
}