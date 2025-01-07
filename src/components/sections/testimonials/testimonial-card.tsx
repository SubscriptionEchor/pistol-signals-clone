import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  delay?: number;
}

export function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
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

      {/* Review Content */}
      <p className="text-sm text-gray-400 leading-relaxed">
        {content}
      </p>
    </div>
  );
}