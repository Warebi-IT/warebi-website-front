import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrolled } from '../../../hooks/useScrolled';
import LanguageSwitcher from '../../molecules/LanguageSwitcher/LanguageSwitcher';
import logo from '@/assets/logo.png';

const navKeys = [
  { path: '/', key: 'home' },
  { path: '/a-propos', key: 'about' },
  { path: '/services', key: 'services' },
  { path: '/realisations', key: 'realisations' },
  { path: '/blog', key: 'blog' },
  { path: '/contact', key: 'contact' },
] as const;

export default function Navbar() {
  const { t } = useTranslation('nav');
  const isScrolled = useScrolled(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 group">
              <img src={logo} alt="WareBi Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl lg:text-2xl font-heading font-bold text-white group-hover:text-neon transition-colors">
                Ware
              </span>
              <span className="text-xl lg:text-2xl font-heading font-bold text-neon">Bi</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navKeys.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                    ? 'text-neon'
                    : 'text-text-secondary hover:text-white'
                    }`}
                >
                  {t(link.key)}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Language Switcher */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <Link
                to="/contact"
                className="btn-secondary text-sm py-2.5 px-5"
              >
                {t('cta')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-neon transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" />
            <div className="relative flex flex-col items-center justify-center h-full space-y-8">
              {navKeys.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-heading font-bold ${location.pathname === link.path
                      ? 'text-neon'
                      : 'text-white hover:text-neon'
                      } transition-colors`}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navKeys.length * 0.1 }}
                className="flex flex-col items-center space-y-4"
              >
                <LanguageSwitcher />
                <Link to="/contact" className="btn-primary mt-4">
                  {t('cta')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
