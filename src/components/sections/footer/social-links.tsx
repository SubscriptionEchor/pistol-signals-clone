import { TELEGRAM_COMMUNITY_LINK, TWITTER_LINK } from '@/lib/config';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    label: 'X',
    href: TWITTER_LINK,
    icon: '/x.svg', // Path to your image in public folder
  },
  {
    label: 'Telegram',
    href: TELEGRAM_COMMUNITY_LINK,
    icon: '/telegram.svg', // Path to your image in public folder
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label={link.label}
        >
          {/* Hover gradient effect */}
          <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity" />
          
          {/* Image container */}
          <div className="relative p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-all hover:scale-110">
            <img 
              src={link.icon} 
              alt={link.label} 
              className="w-5 h-5" 
            />
            <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}