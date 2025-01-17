import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NavLogo() {
  const navigate = useNavigate()
  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
    >
      <div onClick={() => navigate('/dashboard')} className="cursor-pointer h-16 flex items-center px-6">
        <img src="/assets/images/nav-logo.png" alt="Logo" className="h-10" />
        <div className='ms-2 text-sm column  items-center'>
          <p>AI </p>
          <p>Techinal Analyst</p>
        </div>
      </div>
      {/* <div className="p-2 rounded-lg bg-primary/10">
        <Zap className="w-5 h-5 text-primary" />
      </div> */}
      {/* <span className="text-lg font-medium">
        AI Technical Analyst
      </span> */}
    </motion.div>
  );
}