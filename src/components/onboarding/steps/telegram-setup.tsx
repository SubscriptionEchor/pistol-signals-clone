import { useOnboarding } from '../context';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { MessageCircle } from 'lucide-react';

export function TelegramSetup() {
  const { setStep } = useOnboarding();

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold">Enter telegram handle</h2>
        <p className="text-gray-400">
          Share your Telegram handle with us! This is your key to receiving all trading signals, 
          and remember, you can't change it once it's submitted.
        </p>

        <div className="relative">
          <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter telegram username"
            className="pl-10"
          />
        </div>

        <Button 
          variant="gradient"
          className="w-full"
          onClick={() => setStep(3)}
        >
          I've confirmed my details!
        </Button>
      </div>
    </div>
  );
}