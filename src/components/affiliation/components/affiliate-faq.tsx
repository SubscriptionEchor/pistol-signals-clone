import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you only provide crypto signals?',
    answer: 'Yes, we specialize in cryptocurrency trading signals. Our AI-powered system is specifically designed to analyze crypto markets and provide accurate trading opportunities.'
  },
  {
    question: 'Are there any other features or services included besides crypto trading signals?',
    answer: 'Yes! Besides trading signals, we offer risk management tools, market analysis, educational resources, and 24/7 customer support. Our platform also includes portfolio tracking and performance analytics.'
  },
  {
    question: 'How do you customize the trading signals based on my chosen risk level?',
    answer: 'We offer different risk profiles that you can select from. Each profile adjusts parameters like leverage, stop-loss levels, and position sizing according to your risk tolerance.'
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: "Absolutely! You can change your subscription plan at any time. When upgrading, you'll only pay the difference for the remaining period. Downgrades take effect at the next billing cycle."
  }
];

export function AffiliateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold">Frequently asked questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}