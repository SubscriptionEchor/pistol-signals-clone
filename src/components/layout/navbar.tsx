import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/lib/context/user';
import ConfirmationPopup from '../popup';
import { ROUTE_NAMES } from '@/routes/routenames';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Market', href: '#market' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleConfirmLogout = () => {
    localStorage.clear();
    setUserDetails({});
    setPopupOpen(false);
    // navigate('/signin', { replace: true });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="relative z-10 group flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 to-[#FF9933]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/assets/images/nav-logo.png"
              alt="Logo"
              className="w-auto h-8 md:h-10 relative"
            />
            <div className='ms-2 text-sm column  items-center'>
              <p>AI </p>
              <p>Techinal Analyst</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF3366] to-[#FF9933] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!userDetails?.email ? (
              <>
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
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => navigate(ROUTE_NAMES.DASHBOARD)}
                  variant="gradient"
                  className="text-sm"
                >
                  Dashboard
                </Button>
                <Button
                  onClick={handleOpenPopup}
                  variant="secondary"
                  className="text-sm flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#1A1A1A] shadow-2xl shadow-black/50 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <img
                      src="/assets/images/nav-logo.png"
                      alt="Logo"
                      className="h-8"
                    />
                    <motion.button
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </motion.button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-white/10">
                  <div className="flex flex-col gap-3">
                    {!userDetails?.email ? (
                      <>
                        <Button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            navigate(ROUTE_NAMES.SIGNIN);
                          }}
                          variant="secondary"
                          className="w-full"
                        >
                          Sign in
                        </Button>
                        <Button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            navigate(ROUTE_NAMES.SIGNUP);
                          }}
                          variant="gradient"
                          className="w-full"
                        >
                          Get Started
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            navigate(ROUTE_NAMES.DASHBOARD);
                          }}
                          variant="gradient"
                          className="w-full"
                        >
                          Dashboard
                        </Button>
                        <Button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            handleOpenPopup();
                          }}
                          variant="secondary"
                          className="w-full flex items-center justify-center gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign out
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sign Out Confirmation Popup */}
      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmLogout}
      />
    </motion.nav>
  );
}