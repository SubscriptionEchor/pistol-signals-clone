import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What types of signals does AI Technical Analyst provide?",
    answer: "We provide both spot and futures trading signals for major cryptocurrencies. Our AI-powered system analyzes market data 24/7 to generate accurate trading opportunities with specific entry points, take-profit levels, and stop-losses."
  },
  {
    question: "How accurate are your trading signals?",
    answer: "Our signals maintain a 99.2% accuracy rate, backed by advanced AI algorithms and real-time market analysis. However, please note that past performance doesn't guarantee future results, and all trading carries risk."
  },
  {
    question: "How do I receive the trading signals?",
    answer: "Signals are delivered instantly through both our web platform and Telegram channel. You'll receive detailed notifications with entry points, take-profit levels, stop-loss recommendations, and risk management guidelines."
  },
  {
    question: "What's included in the subscription?",
    answer: "Your subscription includes access to real-time trading signals, market analysis, risk management tools, 24/7 support, and our private Telegram channel. Different plans offer additional features like priority signal delivery and custom alert settings."
  },
  {
    question: "Can I try the service before subscribing?",
    answer: "Yes! We offer a 7-day free trial so you can experience our platform's full capabilities. No credit card is required to start your trial."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy: simply sign up for an account, connect your Telegram, and you'll start receiving signals immediately. Our onboarding process will guide you through setting up your preferences."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6 bg-black" id="faq">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#00D1FF]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
          style={{ backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to common questions about our trading signals platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative bg-[#111] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium pr-8">{faq.question}</span>
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
                  <div className="p-6 pt-0 text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}