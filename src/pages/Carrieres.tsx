import { motion } from 'framer-motion';
import { Rocket, BookOpen, Users, Globe, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const cultureKeys = [
  { icon: Rocket, key: 'autonomy' },
  { icon: BookOpen, key: 'learning' },
  { icon: Users, key: 'collaboration' },
  { icon: Globe, key: 'remote' },
];

const jobs = [
  { titleKey: 'Data Engineer', type: 'CDI', location: 'Remote / Paris', descKey: 'data_engineer', stack: ['Python', 'SQL', 'Airflow', 'BigQuery'] },
  { titleKey: 'Développeur Full-Stack', type: 'CDI', location: 'Remote / Paris', descKey: 'fullstack', stack: ['React', 'Laravel', 'PostgreSQL', 'API REST'] },
  { titleKey: 'Data Analyst', type: 'CDI', location: 'Remote / Paris', descKey: 'data_analyst', stack: ['Power BI', 'SQL', 'Python', 'Statistics'] },
  { titleKey: 'ML Engineer', type: 'Freelance', location: 'Remote', descKey: 'ml_engineer', stack: ['Python', 'TensorFlow', 'GCP', 'MLOps'] },
];

export default function Carrieres() {
  const { t } = useTranslation('carrieres');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      {/* Culture Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              {t('culture.title')}<span className="text-neon">{t('culture.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t('culture.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cultureKeys.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-dark border border-border hover:border-neon/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-neon" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {t(`culture.${item.key}.title`)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {t(`culture.${item.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              {t('jobs.title')}<span className="text-neon">{t('jobs.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t('jobs.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-dark-surface border border-border hover:border-neon/50 transition-all cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-neon transition-colors">
                        {job.titleKey}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-neon/10 text-neon text-xs font-mono">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-text-secondary text-xs">{job.location}</span>
                      <span className="text-border">•</span>
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="btn-secondary text-sm whitespace-nowrap">
                    {t('jobs.apply')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                {t('spontaneous.title')}<span className="text-neon">{t('spontaneous.title_highlight')}</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t('spontaneous.subtitle')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-neon" />
                  <span className="text-text-secondary text-sm">{t('spontaneous.checklist.cv')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-neon" />
                  <span className="text-text-secondary text-sm">{t('spontaneous.checklist.portfolio')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-neon" />
                  <span className="text-text-secondary text-sm">{t('spontaneous.checklist.linkedin')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-neon/10 border border-neon/30 text-center"
                >
                  <CheckCircle2 size={48} className="text-neon mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {t('spontaneous.success_title')}
                  </h3>
                  <p className="text-text-secondary">
                    {t('spontaneous.success_message')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder={t('spontaneous.name_placeholder')}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder={t('spontaneous.email_placeholder')}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>
                  <input
                    type="url"
                    placeholder={t('spontaneous.linkedin_placeholder')}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder={t('spontaneous.message_placeholder')}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors resize-none"
                  />
                  <div>
                    <label className="block w-full px-4 py-3 rounded-lg bg-dark border border-border border-dashed text-text-secondary hover:border-neon hover:text-neon transition-colors cursor-pointer text-center">
                      <span>{t('spontaneous.cv_upload')}</span>
                      <input type="file" accept=".pdf" className="hidden" />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {t('spontaneous.submit')}
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              {t('partner.title')}<span className="text-neon">{t('partner.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {t('partner.subtitle')}
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center">
              {t('partner.cta')}
              <Send size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
