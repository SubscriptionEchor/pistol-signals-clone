import { Star } from 'lucide-react';
import { Cryptocurrency } from './types';

interface CryptoRowProps {
  crypto: Cryptocurrency;
}

export function CryptoRow({ crypto }: CryptoRowProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/[0.07] transition-colors">
      <td className="px-6 py-4">
        <button className="text-gray-400 hover:text-yellow-500 transition-colors">
          <Star size={16} />
        </button>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={crypto.logo}
            alt={crypto.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-semibold">{crypto.name}</div>
            <div className="text-sm text-gray-400">{crypto.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-right font-semibold">{crypto.price}</td>
      <td className={`px-6 py-4 text-right ${crypto.isPositive1h ? 'text-green-500' : 'text-red-500'}`}>
        {crypto.change1h}
      </td>
      <td className={`px-6 py-4 text-right ${crypto.isPositive24h ? 'text-green-500' : 'text-red-500'}`}>
        {crypto.change24h}
      </td>
      <td className={`px-6 py-4 text-right ${crypto.isPositive7d ? 'text-green-500' : 'text-red-500'}`}>
        {crypto.change7d}
      </td>
      <td className="px-6 py-4 text-right">{crypto.marketCap}</td>
      <td className="px-6 py-4 text-right">{crypto.volume}</td>
      <td className="px-6 py-4 text-right">{crypto.supply}</td>
    </tr>
  );
}