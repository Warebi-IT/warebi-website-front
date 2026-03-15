import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield, CheckCircle2, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TeamCard from '@/components/molecules/TeamCard/TeamCard';
import ValueCard from '@/components/molecules/ValueCard/ValueCard';
import ProcessCard from '@/components/molecules/ProcessCard/ProcessCard';
import { SpotlightCard } from '@/components/atoms/ui/SpotlightCard';
import { GlowingBorderCard } from '@/components/atoms/ui/GlowingBorderCard';

const valueKeys = [
  { icon: Lightbulb, key: 'innovation' },
  { icon: Target, key: 'expertise' },
  { icon: Users, key: 'partnership' },
  { icon: Shield, key: 'rigor' },
];

const processKeys = ['understand', 'build', 'measure', 'support'] as const;

const team = [
  { name: 'Moussa Marega', role: 'CEO & Fondateur', expertise: 'Business Analysis & Stratégie', initials: 'MM' },
  { name: 'Yann Furrer', role: 'Développeur', expertise: 'Développement & Architecture', initials: 'YF' },
  { name: 'Youssoupha Marega', role: 'Data Analyst & AI', expertise: 'Données & Intelligence Artificielle', initials: 'YM' },
  { name: 'Yancouba', role: 'Data Analyst', expertise: 'Analyse de données', initials: 'YC' },
  { name: 'Idress', role: 'Comptable', expertise: 'Finance & Gestion', initials: 'ID' },
  { name: 'Fouley', role: 'Marketing & Communication', expertise: 'Stratégie & Communication digitale', initials: 'FO' },
];

const referenceKeys = ['brenacaire', 'arkea', 'cmso', 'canada'];
const badgeKeys = ['powerbi', 'ovh', 'aws'] as const;

export default function About() {
  const { t } = useTranslation('about');

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
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              {t('hero.title_1')}<span className="text-neon">{t('hero.title_highlight_1')}</span>
              <br />
              {t('hero.title_2')}
              <br />
              <span className="text-neon">{t('hero.title_highlight_2')}</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
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
              className="space-y-4"
            >
              <GlowingBorderCard>
                <SpotlightCard className="rounded-2xl bg-dark-elevated border border-border p-6">
                  <p className="text-text-secondary text-xs uppercase tracking-widest mb-4">
                    {t('story.references_label')}
                  </p>
                  <div className="space-y-3">
                    {referenceKeys.map((key) => (
                      <div key={key} className="flex items-center space-x-3">
                        <Building2 size={15} className="text-neon flex-shrink-0" />
                        <span className="text-white text-sm">{t(`badges.${key}`)}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </GlowingBorderCard>

              <GlowingBorderCard>
                <SpotlightCard className="rounded-2xl bg-dark-elevated border border-border p-6 flex items-center space-x-4">
                  <CheckCircle2 size={28} className="text-neon flex-shrink-0" />
                  <div>
                    <p className="text-white font-heading font-bold">{t('badges.powerbi')}</p>
                    <p className="text-text-secondary text-sm">{t('story.certification_sub')}</p>
                  </div>
                </SpotlightCard>
              </GlowingBorderCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              {t('team.title')}<span className="text-neon">{t('team.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <TeamCard key={member.initials} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processKeys.map((key, index) => (
              <ProcessCard
                key={key}
                number={t(`process.steps.${key}.number`)}
                title={t(`process.steps.${key}.title`)}
                description={t(`process.steps.${key}.description`)}
                index={index}
                isLast={index === processKeys.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              <ValueCard
                key={value.key}
                icon={value.icon}
                title={t(`values.${value.key}.title`)}
                description={t(`values.${value.key}.description`)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Programmes & Certifications */}
      <section className="relative py-16 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {badgeKeys.map((key) => (
              <div key={key} className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle2 size={18} className="text-neon" />
                <span className="text-sm">{t(`badges.${key}`)}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
