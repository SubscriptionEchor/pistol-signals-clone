import { motion } from 'framer-motion';
import { Container } from '../../ui/container';
import { Logo } from './logo';
import { SocialLinks } from './social-links';
import { FooterNav } from './footer-nav';
import { LegalLinks } from './legal-links';
import { MessageSquare } from 'lucide-react';
import { TELEGRAM_COMMUNITY_LINK } from '@/lib/config';
import { OpenUrl } from '@/lib/utils';

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: 0
          }}
          animate={{
            y: [null, '-100%'],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-black py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00D1FF]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        style={{ backgroundSize: '32px 32px' }}
      />
      <Particles />

      <Container>
        <div className="relative flex flex-col gap-12">
          {/* Telegram Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/10 to-[#00FFFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center sm:text-left">Join Our Trading Community</h3>
                <p className="text-gray-400 text-center sm:text-left">Get instant access to trading signals and market updates via Telegram</p>
              </div>
              <button
                onClick={() => OpenUrl(TELEGRAM_COMMUNITY_LINK)}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] rounded-lg font-medium text-black hover:opacity-90 transition-opacity group whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5" />
                Join Telegram Community
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            </div>
          </motion.div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            {/* Company Info */}
            <div className="space-y-8">
              <Logo />
              <p className="text-gray-400 text-sm">
                AI-powered trading signals platform providing real-time market insights and analysis.
              </p>
              <SocialLinks />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-400 group">
                  <MessageSquare className="w-4 h-4 group-hover:text-[#00D1FF] transition-colors" />
                  <a href="mailto:support@pistolsignals.com" className="hover:text-[#00D1FF] transition-colors">
                    support@pistolsignals.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} AI Technical Analyst. All rights reserved.
            </p>
            <LegalLinks />
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}