import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Globe,
  Megaphone,
  Zap,
  Bot,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const serviceKeys = [
  {
    id: 'tableaux-de-bord',
    key: 'data_bi',
    icon: LayoutDashboard,
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    technologies: ['Power BI', 'Google Looker', 'BigQuery', 'PostgreSQL', 'SQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'site-web',
    key: 'dev',
    icon: Globe,
    color: 'from-violet-500/20 to-violet-600/10',
    borderColor: 'border-violet-500/30',
    technologies: ['React', 'Laravel', 'WordPress', 'API REST', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  },
  {
    id: 'visibilite',
    key: 'analytics',
    icon: Megaphone,
    color: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: 'border-emerald-500/30',
    technologies: ['Google Ads', 'Meta Ads', 'SEO', 'Google Analytics', 'Search Console'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'gain-de-temps',
    key: 'automation',
    icon: Zap,
    color: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-500/30',
    technologies: ['Zapier', 'Make', 'Python', 'API REST', 'Cloud Functions'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    id: 'intelligence-artificielle',
    key: 'ai',
    icon: Bot,
    color: 'from-rose-500/20 to-rose-600/10',
    borderColor: 'border-rose-500/30',
    technologies: ['ChatGPT', 'WhatsApp API', 'Python', 'LangChain', 'Hugging Face'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
];

export default function Services() {
  const { t } = useTranslation('services');
  const [openTechIndex, setOpenTechIndex] = useState<number | null>(null);

  const toggleTech = (index: number) => {
    setOpenTechIndex(openTechIndex === index ? null : index);
  };

  return (
    <div className="relative pt-20">

      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-mono border border-neon/20 mb-8">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t('hero.title')}
              <br />
              <span className="text-neon">{t('hero.title_highlight')}</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              {t('hero.subtitle')}
            </p>
            {/* Ancres rapides */}
            <div className="flex flex-wrap justify-center gap-3">
              {serviceKeys.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-4 py-2 rounded-full bg-dark-surface border border-border text-text-secondary text-sm hover:border-neon/50 hover:text-neon transition-colors"
                >
                  {t(`items.${service.key}.title`)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="relative">
        {serviceKeys.map((service, index) => {
          const features = t(`items.${service.key}.features`, { returnObjects: true }) as string[];
          const isOpen = openTechIndex === index;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`relative py-24 lg:py-32 ${index % 2 === 1 ? 'bg-dark-surface' : ''}`}
            >
              <div className="absolute inset-0 grid-overlay opacity-10" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>

                  {/* Contenu */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={index % 2 === 1 ? 'lg:order-2' : ''}
                  >
                    {/* Numéro + Icône */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} border ${service.borderColor} flex items-center justify-center`}>
                        <service.icon size={26} className="text-neon" />
                      </div>
                      <span className="text-text-secondary text-sm font-mono">
                        {String(index + 1).padStart(2, '0')} / {String(serviceKeys.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                      {t(`items.${service.key}.title`)}
                    </h2>

                    <p className="text-neon text-lg mb-6 italic">
                      "{t(`items.${service.key}.tagline`)}"
                    </p>

                    <p className="text-text-secondary leading-relaxed mb-8">
                      {t(`items.${service.key}.description`)}
                    </p>

                    {/* Ce que vous obtenez */}
                    <div className="mb-6">
                      <p className="text-white text-sm font-medium mb-4 uppercase tracking-wider">
                        {t('what_you_get')}
                      </p>
                      <div className="space-y-3">
                        {Array.isArray(features) && features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <CheckCircle2 size={18} className="text-neon mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Résultat */}
                    <div className="p-4 rounded-xl bg-neon/10 border border-neon/20 mb-6">
                      <p className="text-neon text-sm">
                        <span className="font-bold">{t('result_label')}</span> {t(`items.${service.key}.result`)}
                      </p>
                    </div>

                    {/* Technologies — accordéon discret */}
                    <div className="mb-8">
                      <button
                        onClick={() => toggleTech(index)}
                        className="flex items-center gap-2 text-text-secondary text-xs hover:text-white transition-colors group"
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                        <span>{t('tech_label')}</span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-wrap gap-2 mt-3">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Micro-CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/contact"
                        className="btn-primary inline-flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={16} />
                        {t('cta_service')}
                      </Link>
                      <a
                        href="https://wa.me/221000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center justify-center gap-2"
                      >
                        <Phone size={16} />
                        {t('cta_whatsapp')}
                      </a>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={index % 2 === 1 ? 'lg:order-1' : ''}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                      {/* Badge résultat sur l'image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark/80 backdrop-blur-sm border border-neon/20">
                          <span className="w-2 h-2 rounded-full bg-neon animate-pulse flex-shrink-0" />
                          <span className="text-neon text-xs font-medium">{t(`items.${service.key}.result_short`)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              {t('faq.title')}
              <span className="text-neon">{t('faq.title_highlight')}</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {(t('faq.items', { returnObjects: true }) as { q: string; a: string }[]).map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-surface to-dark" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              {t('cta.title')}
              <span className="text-neon">{t('cta.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center text-lg px-8 py-4 gap-2">
                {t('cta.button')}
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/221000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center text-lg px-8 py-4 gap-2"
              >
                <Phone size={20} />
                {t('cta.whatsapp')}
              </a>
            </div>
            <p className="text-text-secondary text-sm mt-6 opacity-60">
              {t('cta.no_commitment')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl bg-dark border border-border overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-elevated transition-colors"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`text-neon flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-6 text-text-secondary text-sm leading-relaxed border-t border-border pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
