import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  navigation: [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ],
  services: [
    { path: '/services#data-bi', label: 'Data & BI' },
    { path: '/services#developpement', label: 'Développement' },
    { path: '/services#analytics', label: 'Analytics' },
    { path: '/services#automatisation', label: 'Automatisation' },
    { path: '/services#ia', label: 'Intelligence Artificielle' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
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
              Votre partenaire technologique pour la transformation digitale. 
              De la data à l'intelligence artificielle, nous construisons les solutions 
              qui font la différence.
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
            <h3 className="text-white font-heading font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-neon transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-neon transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Contact</h3>
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
            © 2025 WareBi. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/mentions-legales" className="text-text-secondary hover:text-neon text-sm transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-text-secondary hover:text-neon text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
