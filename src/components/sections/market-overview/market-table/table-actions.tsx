import { Filter, LayoutGrid, Settings2 } from 'lucide-react';

export function TableActions() {
  return (
    <div className="flex items-center gap-2">
      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
        <Filter size={20} className="text-gray-400" />
      </button>
      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
        <LayoutGrid size={20} className="text-gray-400" />
      </button>
      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
        <Settings2 size={20} className="text-gray-400" />
      </button>
    </div>
  );
}