import { motion } from 'framer-motion';
import {
  Database,
  Code2,
  TrendingUp,
  Settings2,
  Brain,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const serviceKeys = [
  {
    id: 'data-bi',
    key: 'data_bi',
    icon: Database,
    technologies: ['Power BI', 'Google Cloud Platform', 'BigQuery', 'Dataflow', 'SQL', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'developpement',
    key: 'dev',
    icon: Code2,
    technologies: ['PHP', 'Laravel', 'WordPress', 'JavaScript', 'React', 'HTML/CSS', 'API REST'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  },
  {
    id: 'analytics',
    key: 'analytics',
    icon: TrendingUp,
    technologies: ['Google Analytics', 'Google Ads', 'Tag Manager', 'Search Console', 'Data Studio'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'automatisation',
    key: 'automation',
    icon: Settings2,
    technologies: ['Apache Airflow', 'Cloud Scheduler', 'SQL', 'Python', 'Dataflow', 'Cloud Functions'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    id: 'ia',
    key: 'ai',
    icon: Brain,
    technologies: ['Python', 'TensorFlow', 'Qwen', 'GCP AI/ML', 'LangChain', 'Hugging Face'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
];

export default function Services() {
  const { t } = useTranslation('services');

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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t('hero.title')}
              <br />
              <span className="text-neon">{t('hero.title_highlight')}</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative">
        {serviceKeys.map((service, index) => {
          const features = t(`items.${service.key}.features`, { returnObjects: true }) as string[];

          return (
            <div
              key={service.id}
              id={service.id}
              className={`relative py-24 lg:py-32 ${index % 2 === 1 ? 'bg-dark-surface' : ''
                }`}
            >
              <div className="absolute inset-0 grid-overlay opacity-10" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={index % 2 === 1 ? 'lg:order-2' : ''}
                  >
                    <div className="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center mb-6">
                      <service.icon size={28} className="text-neon" />
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

                    <div className="space-y-3 mb-8">
                      {Array.isArray(features) && features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle2 size={18} className="text-neon mt-1 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <p className="text-white text-sm font-medium mb-3">{t('technologies_label')}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Result */}
                    <div className="p-4 rounded-xl bg-neon/10 border border-neon/20 mb-8">
                      <p className="text-neon text-sm">
                        <span className="font-bold">{t('result_label')}</span> {t(`items.${service.key}.result`)}
                      </p>
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
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
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
            <Link to="/contact" className="btn-primary inline-flex items-center text-lg px-8 py-4">
              {t('cta.button')}
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
