import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export function ReviewCard({ name, role, content, avatar }: ReviewCardProps) {
  return (
    <div className="bg-[#111] rounded-xl border border-white/10 p-6 h-full hover:bg-[#161616] transition-colors duration-300">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-sm text-white">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className="fill-yellow-500 text-yellow-500"
            style={{ filter: 'drop-shadow(0 0 4px rgba(234, 179, 8, 0.3))' }}
          />
        ))}
      </div>

      {/* Review Content */}
      <p className="text-sm text-gray-400 leading-relaxed">
        {content}
      </p>
    </div>
  );
}