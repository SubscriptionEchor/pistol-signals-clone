import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/lib/context/user';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Market', href: '#market' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { userDetails } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/80 backdrop-blur-xl '
        : 'bg-transparent'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href='/' className="relative cursor-pointer z-10">
            <img
              src="/assets/images/nav-logo.png"
              alt="Logo"
              className="w-auto h-8 md:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          {!userDetails?.email ?
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => navigate('/signin')}
                variant="secondary"
                className="text-sm"
              >
                Sign in
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                variant="gradient"
                className="text-sm"
              >
                Get Started
              </Button>
            </div> :
            <Button
              onClick={() => navigate('/dashboard')}
              variant="gradient"
              className="text-sm"
            >
              Go to Dashboard
            </Button>
          }

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 pt-24"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {!userDetails?.email && <div className="flex flex-col gap-4 mt-6">
                  <Button
                    onClick={() => navigate('/signin')}
                    variant="secondary"
                    className="w-full"
                  >
                    Sign in
                  </Button>
                  <Button
                    onClick={() => navigate('/signup')}
                    variant="gradient"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>}
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </nav>
  );
}
