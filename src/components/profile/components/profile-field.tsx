import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ProfileFieldProps {
  label: string;
  value: string;
  type: string;
  onEdit: () => void;
  onchange: () => {};
}

export function ProfileField({ label, value, type, onEdit, onchange }: ProfileFieldProps) {
  const [isEdit, setIsEdit] = useState(false)
  const onEditClick = () => {
    if (!isEdit) {
      setIsEdit(true)
      return
    }
    onEdit()
    setIsEdit(false)
  }
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-400">{label}</label>
      <div className="flex gap-4">
        <div className="relative flex-1 group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          <input
            type={type}
            onChange={(e) => onchange(e?.target.value)}
            value={value}
            placeholder={`Enter ${label}`}
            readOnly={!isEdit && type != "password"}
            className="relative w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
        {label == "Full name" ? <Button variant="secondary" onClick={onEditClick}>{isEdit ? 'save' : 'Edit'}</Button> : null}
      </div>
    </div>
  );
}