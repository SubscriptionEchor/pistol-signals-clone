import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="text-gray-400">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Email address and password for account creation</li>
              <li>Telegram handle for signal delivery</li>
              <li>Trading preferences and settings</li>
              <li>Usage data and platform interactions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-gray-400">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Provide and improve our trading signal services</li>
              <li>Deliver signals through Telegram</li>
              <li>Personalize your experience</li>
              <li>Send important updates about our service</li>
              <li>Analyze and improve our platform performance</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Data Security</h2>
            <p className="text-gray-400">
              We implement robust security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Regular security audits</li>
              <li>Secure data storage practices</li>
              <li>Access controls and monitoring</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Information Sharing</h2>
            <p className="text-gray-400">
              We do not sell or share your personal information with third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>When required by law</li>
              <li>To provide our services (e.g., Telegram integration)</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Your Rights</h2>
            <p className="text-gray-400">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Cookies and Tracking</h2>
            <p className="text-gray-400">
              We use cookies and similar technologies to improve user experience and analyze platform usage. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Updates to Privacy Policy</h2>
            <p className="text-gray-400">
              We may update this privacy policy periodically. We will notify you of any significant changes via email or platform notifications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            <p className="text-gray-400">
              For privacy-related inquiries, please contact us at privacy@pistolsignals.com
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}