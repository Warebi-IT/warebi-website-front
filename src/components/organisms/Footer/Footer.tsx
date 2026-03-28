import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const navKeys = [
  { path: '/', key: 'home' },
  { path: '/a-propos', key: 'about' },
  { path: '/services', key: 'services' },
  { path: '/realisations', key: 'realisations' },
  // { path: '/blog', key: 'blog' },
  { path: '/contact', key: 'contact' },
] as const;

const serviceLinks = [
  { path: '/services#data-bi', key: 'data_bi' },
  { path: '/services#developpement', key: 'dev' },
  { path: '/services#analytics', key: 'analytics' },
  { path: '/services#automatisation', key: 'automation' },
  { path: '/services#ia', key: 'ai' },
] as const;

export default function Footer() {
  const { t } = useTranslation('footer');
  const { t: tNav } = useTranslation('nav');
  const { t: tServices } = useTranslation('services');

  return (
    <footer className="relative z-10 bg-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-1">
              <span className="text-2xl font-heading font-bold text-white">Ware</span>
              <span className="text-2xl font-heading font-bold text-neon">Bi</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t('brand_description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-surface border border-border text-text-secondary hover:text-neon hover:border-neon transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">{t('navigation')}</h3>
            <ul className="space-y-3">
              {navKeys.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-neon transition-colors text-sm"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-neon transition-colors text-sm"
                  >
                    {tServices(`items.${link.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">{t('contact_title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-neon mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary text-sm">contact@warebi.fr</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-neon mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary text-sm">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-neon mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-text-secondary text-sm">
            {t('copyright')}
          </p>
          <div className="flex space-x-6">
            <Link to="/mentions-legales" className="text-text-secondary hover:text-neon text-sm transition-colors">
              {t('legal')}
            </Link>
            <Link to="/politique-confidentialite" className="text-text-secondary hover:text-neon text-sm transition-colors">
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
