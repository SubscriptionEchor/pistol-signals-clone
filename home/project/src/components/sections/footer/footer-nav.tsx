import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const navigation = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Help Centre', href: '#help' },
  { label: 'Roadmap', href: '#roadmap', isLaunching: true },
  { label: 'Affiliates', href: '#affiliates' },
];

export function FooterNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {navigation.map((item, index) => (
        <motion.a
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          href={item.href}
          className={`text-sm transition-all relative group ${
            item.isLaunching 
              ? 'text-gray-500 cursor-not-allowed' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="flex items-center gap-1">
            {item.label}
            {item.isLaunching && (
              <Rocket className="w-3 h-3" />
            )}
          </span>
          {item.isLaunching && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-white/10 rounded text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
              Launching Soon
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-black/50" />
            </span>
          )}
          <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </motion.a>
      ))}
    </nav>
  );
}