import { motion } from 'framer-motion';

const legalLinks = [
  { label: 'Terms & conditions', href: '#terms' },
  { label: 'Privacy policy', href: '#privacy' },
];

export function LegalLinks() {
  return (
    <div className="flex gap-6">
      {legalLinks.map((link, index) => (
        <motion.a
          key={link.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          href={link.href}
          className="text-sm text-gray-400 hover:text-white transition-colors relative group"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </motion.a>
      ))}
    </div>
  );
}