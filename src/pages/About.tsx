import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const valueKeys = [
  { icon: Lightbulb, key: 'innovation' },
  { icon: Target, key: 'expertise' },
  { icon: Users, key: 'partnership' },
  { icon: Shield, key: 'rigor' },
];

const processKeys = ['understand', 'build', 'measure', 'support'] as const;

const team = [
  { name: 'Alexandre Martin', role: 'CEO & Fondateur', expertise: 'Data & Stratégie', initials: 'AM' },
  { name: 'Sarah Chen', role: 'CTO', expertise: 'Architecture & Dev', initials: 'SC' },
  { name: 'Thomas Dubois', role: 'Lead Data Engineer', expertise: 'Data & Analytics', initials: 'TD' },
  { name: 'Marie Lefebvre', role: 'Head of AI', expertise: 'Machine Learning', initials: 'ML' },
];

const badgeKeys = ['gcp', 'microsoft', 'powerbi', 'iso'] as const;

export default function About() {
  const { t } = useTranslation('about');

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
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              {t('hero.title_1')}<span className="text-neon">{t('hero.title_highlight_1')}</span>
              <br />
              {t('hero.title_2')}
              <br />
              {t('hero.title_3')}<span className="text-neon">{t('hero.title_highlight_2')}</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                {t('story.title')}<span className="text-neon">{t('story.title_highlight')}</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>{t('story.p1')}</p>
                <p>{t('story.p2')}</p>
                <p>{t('story.p3')}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neon/20 to-dark-surface border border-neon/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-heading font-bold text-neon mb-4">{t('story.years_number')}</div>
                  <p className="text-white text-xl">{t('story.years_label')}</p>
                  <p className="text-text-secondary mt-2">{t('story.years_sub')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              {t('process.title')}<span className="text-neon">{t('process.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-heading font-bold text-neon/20 mb-4">
                  {t(`process.steps.${key}.number`)}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {t(`process.steps.${key}.title`)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(`process.steps.${key}.description`)}
                </p>
                {index < processKeys.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-neon/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              {t('team.title')}<span className="text-neon">{t('team.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-dark-elevated border border-border hover:border-neon/50 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon/30 to-neon/10 flex items-center justify-center mb-4 mx-auto group-hover:from-neon/50 group-hover:to-neon/20 transition-all">
                    <span className="text-2xl font-heading font-bold text-neon">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-neon text-sm text-center mb-2">{member.role}</p>
                  <p className="text-text-secondary text-xs text-center">
                    {member.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              {t('values.title')}<span className="text-neon">{t('values.title_highlight')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {valueKeys.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-dark-surface border border-border hover:border-neon/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <value.icon size={24} className="text-neon" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {t(`values.${value.key}.title`)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative py-16 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {badgeKeys.map((key) => (
              <div key={key} className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle2 size={18} className="text-neon" />
                <span className="text-sm">{t(`badges.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
