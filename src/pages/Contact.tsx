import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Calendar,
  Send
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const subjectKeys = ['data_bi', 'dev', 'analytics', 'automation', 'ai', 'other'] as const;
const faqKeys = ['cost', 'timeline', 'remote', 'small'] as const;

export default function Contact() {
  const { t } = useTranslation('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t('hero.title')}<span className="text-neon">{t('hero.title_highlight')}</span>
            </h1>
            <p className="text-xl text-text-secondary">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-8">
                {t('form.title')}
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-neon/10 border border-neon/30 text-center"
                >
                  <CheckCircle2 size={48} className="text-neon mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {t('form.success_title')}
                  </h3>
                  <p className="text-text-secondary">
                    {t('form.success_message')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder={t('form.name_placeholder')}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder={t('form.email_placeholder')}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={t('form.company_placeholder')}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                  />
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-text-secondary focus:outline-none focus:border-neon transition-colors appearance-none"
                    >
                      <option value="">{t('form.subject_placeholder')}</option>
                      {subjectKeys.map((key) => (
                        <option key={key} value={key}>{t(`subjects.${key}`)}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                  </div>
                  <textarea
                    rows={5}
                    required
                    placeholder={t('form.message_placeholder')}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {t('form.submit')}
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-8">
                  {t('info.title')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-dark border border-border">
                    <Mail size={22} className="text-neon mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{t('info.email_label')}</p>
                      <p className="text-text-secondary text-sm">contact@warebi.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-dark border border-border">
                    <Phone size={22} className="text-neon mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{t('info.phone_label')}</p>
                      <p className="text-text-secondary text-sm">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-dark border border-border">
                    <MapPin size={22} className="text-neon mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{t('info.location_label')}</p>
                      <p className="text-text-secondary text-sm">{t('info.location_value')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-dark border border-border">
                    <Linkedin size={22} className="text-neon mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{t('info.linkedin_label')}</p>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neon text-sm hover:underline">linkedin.com/company/warebi</a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/33123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:border-green-500/50 transition-colors"
                  >
                    <MessageCircle size={22} className="text-green-500 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{t('info.whatsapp_label')}</p>
                      <p className="text-green-400 text-sm">{t('info.whatsapp_cta')}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Calendly */}
              <div className="p-6 rounded-2xl bg-dark border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar size={24} className="text-neon" />
                  <h3 className="text-xl font-heading font-bold text-white">
                    {t('calendly.title')}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  {t('calendly.subtitle')}
                </p>
                <a
                  href="https://calendly.com/warebi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center"
                >
                  {t('calendly.button')}
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              {t('faq.title')}<span className="text-neon">{t('faq.title_highlight')}</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === key ? null : key)}
                  className="w-full flex items-center justify-between p-6 rounded-2xl bg-dark-surface border border-border hover:border-neon/30 transition-colors text-left"
                >
                  <span className="text-white font-medium pr-4">
                    {t(`faq.items.${key}.question`)}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-neon flex-shrink-0 transition-transform ${openFaq === key ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === key && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 pb-4"
                  >
                    <p className="text-text-secondary text-sm leading-relaxed pt-2">
                      {t(`faq.items.${key}.answer`)}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
