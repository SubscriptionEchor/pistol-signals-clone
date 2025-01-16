import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from './faq-item';

const faqs = [
  {
    "question": "What types of signals does AI Technical Analyst provide?",
    "answer": "We provide both spot and future trading signals on a daily basis."
  },
  {
    "question": "Can I view past signals?",
    "answer": "Yes, users have the flexibility to view our signal history to analyze past performance."
  },
  {
    "question": "How do I connect my Telegram channel to AI Technical Analyst?",
    "answer": "You can connect your Telegram channel through the settings section. Please note that once connected, you cannot change your Telegram ID."
  },
  {
    "question": "What happens if I cancel my subscription?",
    "answer": "If you cancel your subscription, no refund will be issued. However, you will retain access to the platform until the end of your subscription period."
  },
  {
    "question": "How many subscription plans are available, and what do they offer?",
    "answer": "We currently offer three plans. Each plan varies in features and duration, providing flexibility based on your needs."
  },
  {
    "question": "Where can I get help if I face an issue?",
    "answer": "If you encounter any problems, you can reach out to our support team directly through the email provided above."
  },
  {
    "question": "Can I upgrade or downgrade my subscription plan?",
    "answer": "Yes, you can modify your subscription plan at any time. However, the changes will take effect based on the terms and conditions of the platform."
  }
]
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        Frequently asked questions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>
    </div>
  );
}