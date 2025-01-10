import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function LegalLinks() {
  const navigate = useNavigate();
  
  return (
    <div className="flex gap-6">
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        onClick={() => navigate('/terms')}
        className="text-sm text-gray-400 hover:text-white transition-colors relative group"
      >
        Terms of Service
        <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </motion.button>
      
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        onClick={() => navigate('/privacy')}
        className="text-sm text-gray-400 hover:text-white transition-colors relative group"
      >
        Privacy Policy
        <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </motion.button>
    </div>
  );
}