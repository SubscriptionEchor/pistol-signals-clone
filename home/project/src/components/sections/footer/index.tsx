import { motion } from 'framer-motion';
import { Container } from '../../ui/container';
import { Logo } from './logo';
import { SocialLinks } from './social-links';
import { FooterNav } from './footer-nav';
import { LegalLinks } from './legal-links';

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
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '32px 32px' }} 
      />
      <Particles />

      <Container>
        <div className="relative flex flex-col gap-12">
          {/* Logo and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <Logo />
            <SocialLinks />
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FooterNav />
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 pt-8 border-t border-white/10"
          >
            <LegalLinks />
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pistol Signals. All rights reserved.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}