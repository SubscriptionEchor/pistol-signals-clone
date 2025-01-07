import { motion } from 'framer-motion';
import { Mail, HelpCircle, Phone } from 'lucide-react';

const supportOptions = [
  {
    icon: Mail,
    title: 'Sales',
    description: 'Speak to our friendly team',
    contact: 'sales@pistolsignals.com',
    link: 'mailto:sales@pistolsignals.com'
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    description: 'Speak to our friendly team',
    contact: 'support@pistolsignals.com',
    link: 'mailto:support@pistolsignals.com'
  },
  // {
  //   icon: Phone,
  //   title: 'Call us',
  //   description: 'Mon-Fri from 8am to 5pm',
  //   contact: '+1 (666) 000-0000',
  //   link: 'tel:+16660000000'
  // }
];

export function SupportOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {supportOptions.map((option, index) => (
        <motion.div
          key={option.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          
          <a 
            href={option.link}
            className="relative block bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                <option.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{option.title}</h3>
                <p className="text-sm text-gray-400">{option.description}</p>
              </div>
            </div>
            <p className="text-primary hover:text-primary-light transition-colors">
              {option.contact}
            </p>
          </a>
        </motion.div>
      ))}
    </div>
  );
}