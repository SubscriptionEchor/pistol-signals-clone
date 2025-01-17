import { LucideIcon } from 'lucide-react';

interface MetricRowProps {
  label: string;
  values: string[];
  iconColor: string;
}

export function MetricRow({ label, values, icon, iconColor }: MetricRowProps) {
  console.log(icon)
  return (
    <div className="flex items-start gap-3">
      <div className={`p-3 rounded-lg ${iconColor}`}>
        <img src={icon} alt="icon" className='h-7 w-7' />
        {/* <Icon className="w-5 h-5" /> */}
      </div>
      <div>
        <p className="text-md text-gray-400 mb-1">{label}</p>
        <p className="font-medium">${values.join(' /')}</p>
      </div>
    </div>
  );
}