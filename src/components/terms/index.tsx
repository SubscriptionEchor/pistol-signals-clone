import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <img src="/assets/images/nav-logo.png" alt="AI Technical Analyst" className="h-8" />
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            Back to home
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">Terms of Service</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By accessing and using AI Technical Analyst, you agree to be bound by these Terms of Service. These terms govern your access to and use of our crypto trading signals platform, including any content, functionality, and services offered.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Service Description</h2>
            <p className="text-gray-400">
              AI Technical Analyst provides AI-powered cryptocurrency trading signals and market analysis. Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Real-time trading signals</li>
              <li>Market analysis and insights</li>
              <li>Telegram channel notifications</li>
              <li>Risk management recommendations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
            <p className="text-gray-400">
              Users are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Maintaining the confidentiality of their account credentials</li>
              <li>All activities that occur under their account</li>
              <li>Ensuring their trading decisions comply with local regulations</li>
              <li>Understanding the risks associated with cryptocurrency trading</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Risk Disclosure</h2>
            <p className="text-gray-400">
              Cryptocurrency trading involves substantial risk of loss. Our signals are for informational purposes only and should not be considered as financial advice. Past performance is not indicative of future results.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Subscription and Payments</h2>
            <p className="text-gray-400">
              Access to our services requires an active subscription. Subscriptions are billed according to the plan selected. Refunds are provided in accordance with our refund policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
            <p className="text-gray-400">
              AI Technical Analyst shall not be liable for any losses, damages, or costs arising from the use of our services or any trading decisions made based on our signals.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Modifications to Service</h2>
            <p className="text-gray-400">
              We reserve the right to modify or discontinue our services at any time. We will provide reasonable notice of any significant changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Termination</h2>
            <p className="text-gray-400">
              We reserve the right to terminate or suspend access to our services for any reason, including violation of these terms.
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}