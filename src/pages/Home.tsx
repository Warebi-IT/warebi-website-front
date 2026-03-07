import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database,
  Code2,
  TrendingUp,
  Settings2,
  Brain,
  ArrowDown,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/molecules/ServiceCard/ServiceCard';
import ProjectCard from '../components/molecules/ProjectCard/ProjectCard';
import AnimatedCounter from '../components/atoms/AnimatedCounter/AnimatedCounter';

const serviceKeys = [
  { icon: Database, key: 'data_bi', link: '/services#data-bi' },
  { icon: Code2, key: 'dev', link: '/services#developpement' },
  { icon: TrendingUp, key: 'analytics', link: '/services#analytics' },
  { icon: Settings2, key: 'automation', link: '/services#automatisation' },
  { icon: Brain, key: 'ai', link: '/services#ia' },
];

const projectKeys = [
  {
    key: 'gcp',
    tags: ['BigQuery', 'Dataflow', 'Power BI', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    key: 'airflow',
    tags: ['Airflow', 'Python', 'SQL', 'Cloud Scheduler'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    key: 'saas',
    tags: ['Laravel', 'React', 'PostgreSQL', 'API REST'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

const statKeys = [
  { value: 50, suffix: '+', labelKey: 'projects' },
  { value: 15, suffix: '+', labelKey: 'clients' },
  { value: 99, suffix: '%', labelKey: 'satisfaction' },
  { value: 5, suffix: '', labelKey: 'expertise' },
];

const techStack = [
  'Power BI', 'GCP', 'Python', 'Airflow', 'Laravel', 'React', 'BigQuery', 'TensorFlow'
];

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-mono border border-neon/20 mb-8">
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight mb-6"
            >
              <span className="text-white">{t('hero.title_1')}</span>
              <span className="text-neon glow-text">{t('hero.title_highlight_1')}</span>
              <span className="text-white">.</span>
              <br />
              <span className="text-white">{t('hero.title_2')}</span>
              <span className="text-neon glow-text">{t('hero.title_highlight_2')}</span>
              <span className="text-white">.</span>
              <br />
              <span className="text-white">{t('hero.title_3')}</span>
              <span className="text-neon glow-text">{t('hero.title_highlight_3')}</span>
              <span className="text-white">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services" className="btn-primary w-full sm:w-auto">
                {t('hero.cta_primary')}
              </Link>
              <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                {t('hero.cta_secondary')}
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-20"
            >
              <p className="text-text-secondary text-sm mb-6">{t('hero.tech_label')}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-dark-surface border border-border text-text-secondary text-sm font-mono hover:border-neon/50 hover:text-neon transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-text-secondary"
          >
            <span className="text-sm mb-2">{t('hero.scroll')}</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              {t('services.title')}
              <span className="text-neon">{t('services.title_highlight')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((service, index) => (
              <ServiceCard
                key={service.key}
                icon={service.icon}
                title={t(`services.items.${service.key}.title`)}
                description={t(`services.items.${service.key}.description`)}
                link={service.link}
                index={index}
                learnMore={t('services.learn_more')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {statKeys.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-6xl font-heading font-bold text-neon mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-secondary text-sm lg:text-base">{t(`stats.${stat.labelKey}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
                {t('projects.title')}
                <span className="text-neon">{t('projects.title_highlight')}</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl">
                {t('projects.subtitle')}
              </p>
            </div>
            <Link
              to="/realisations"
              className="mt-6 lg:mt-0 inline-flex items-center text-neon font-medium hover:underline"
            >
              {t('projects.see_all')}
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectKeys.map((project, index) => (
              <ProjectCard
                key={project.key}
                title={t(`projects.items.${project.key}.title`)}
                client={t(`projects.items.${project.key}.client`)}
                description={t(`projects.items.${project.key}.description`)}
                result={t(`projects.items.${project.key}.result`)}
                tags={project.tags}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </div>
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
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              {t('cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
