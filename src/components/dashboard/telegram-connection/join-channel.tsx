import { ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JoinChannelProps {
  channelLink: string;
  onJoined: () => void;
}

export function JoinChannel({ channelLink, onJoined }: JoinChannelProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <a
          href={channelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors text-sm text-blue-400"
        >
          <span>{channelLink}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        <Button
          variant="gradient"
          onClick={onJoined}
          className="text-sm py-2"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          I've Joined
        </Button>
      </div>
      <p className="text-xs text-gray-400">
        Join our channel to start receiving signals
      </p>
    </div>
  );
}