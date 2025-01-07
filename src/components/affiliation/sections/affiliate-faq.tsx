import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GradientCard } from '@/components/ui/gradient-card';

const faqs = [
  {
    question: 'How do I get started with the affiliate program?',
    answer: 'Getting started is easy! Simply sign up for an affiliate account, complete your profile, and get your unique referral link. You can start sharing and earning right away.'
  },
  {
    question: 'When and how do I get paid?',
    answer: 'Payments are processed monthly for all earnings above $50. We support multiple payment methods including PayPal, bank transfer, and cryptocurrency.'
  },
  {
    question: "What marketing materials do you provide?",
    answer: "We provide a variety of marketing materials including banners, landing pages, email templates, and social media content to help you promote effectively."
  },
  {
    question: "How long does the cookie last?",
    answer: "Our cookie duration is 30 days, meaning you'll earn commission on any purchase your referral makes within 30 days of clicking your link."
  }
];

export function AffiliateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about our affiliate program.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* <div className="absolute -inset-[1px] bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" /> */}
            <GradientCard>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            </GradientCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}