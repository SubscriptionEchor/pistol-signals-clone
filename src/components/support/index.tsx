import { motion } from 'framer-motion';
import { SupportOptions } from './components/support-options';
import { FAQSection } from './components/faq-section';
import { DashboardLayout } from '@/components/dashboard/layout';

export function Support() {
  return (
     <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
    <div className="p-8 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Help and FAQ</h1>
        <p className="text-gray-400">Get quick answers and support for your questions</p>
      </motion.div>

      <SupportOptions />
      <FAQSection />
    </div>
      </div>
     </DashboardLayout>
  );
}