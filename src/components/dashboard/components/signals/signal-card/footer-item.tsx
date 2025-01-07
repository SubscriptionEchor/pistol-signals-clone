import { LucideIcon } from 'lucide-react';

interface FooterItemProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export function FooterItem({ label, value, icon: Icon }: FooterItemProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-3">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
        <Icon className="w-4 h-4" />
        {label}
      </div>
      <p className="font-medium text-white">{value}</p>
    </div>
  );
}