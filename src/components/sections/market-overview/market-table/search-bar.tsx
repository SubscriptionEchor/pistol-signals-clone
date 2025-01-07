import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative w-full sm:w-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search cryptocurrencies..."
        className="w-full sm:w-80 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}