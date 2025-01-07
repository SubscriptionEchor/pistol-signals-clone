import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I get started?",
    answer: "Sign up for an account, choose your preferred plan, and start receiving trading signals immediately. Our onboarding process will guide you through setting up your preferences and connecting to our Telegram channel."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. The price difference will be prorated based on your billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and various cryptocurrencies including Bitcoin, Ethereum, and USDT."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial on our Pro plan so you can experience our premium features before committing."
  }
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8"
      >
        Frequently Asked Questions
      </motion.h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="p-4 pt-0 text-gray-400 text-sm">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}