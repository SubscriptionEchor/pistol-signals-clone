import { Clock, CheckCircle2 } from 'lucide-react';

export function PendingApproval() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-300">Handle submitted</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-300">Channel joined</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-xs text-gray-300">Verifying membership</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400">
        Verification usually takes less than 5 minutes
      </p>
    </div>
  );
}