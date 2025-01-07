import { getFormattedDateFromTimestamp } from '@/lib/utils';
import { CoinIcon } from './coin-icon';
import { SignalType } from './signal-type';
import { IMAGE_URL } from '@/lib/config';

interface SignalHeaderProps {
  coin: string;
  timestamp: string;
  type: 'Long' | 'Short';
  image: string;
}

export function SignalHeader({ coin, symbol, timestamp, type, image }: SignalHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        {/* <CoinIcon coin={coin} /> */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <img
            src={image}
            alt={coin}
            className="w-10 h-10"
            onError={(e) => {
              e.target.src = `${IMAGE_URL}btc.png`
              e.target.onerror = null; // Prevents infinite loop if fallback also fails
            }}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">{coin} ({symbol})</h3>
          <p className="text-sm text-gray-500">{getFormattedDateFromTimestamp(timestamp)}</p>
        </div>
      </div>
      <SignalType type={type} />
    </div>
  );
}