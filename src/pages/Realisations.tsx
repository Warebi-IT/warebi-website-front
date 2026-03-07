import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/atoms/ui/dialog';
import { useTranslation } from 'react-i18next';

const projectKeys = ['gcp', 'airflow', 'saas', 'analytics_project', 'chatbot', 'warehouse'] as const;

const projectAssets: Record<string, { tags: string[]; image: string }> = {
  gcp: {
    tags: ['BigQuery', 'Dataflow', 'Power BI', 'SQL', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  airflow: {
    tags: ['Airflow', 'Python', 'SQL', 'Cloud Scheduler'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  saas: {
    tags: ['Laravel', 'JavaScript', 'PostgreSQL', 'API REST', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  analytics_project: {
    tags: ['Google Analytics', 'Tag Manager', 'Data Studio', 'Google Ads'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
  },
  chatbot: {
    tags: ['Python', 'LangChain', 'OpenAI', 'API REST'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  warehouse: {
    tags: ['BigQuery', 'dbt', 'SQL', 'Dataflow'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  },
};

const categoryKeys = ['data_bi', 'dev', 'analytics', 'automation', 'ai'] as const;

export default function Realisations() {
  const { t } = useTranslation('realisations');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProjectKey, setSelectedProjectKey] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projectKeys
    : projectKeys.filter((key) => t(`items.${key}.category`) === t(`categories.${selectedCategory}`));

  const selectedProject = selectedProjectKey ? {
    key: selectedProjectKey,
    ...projectAssets[selectedProjectKey],
  } : null;

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t('hero.title_1')}
              <br />
              <span className="text-neon">{t('hero.title_highlight')}</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === 'all'
                  ? 'bg-neon text-black'
                  : 'bg-dark-elevated text-text-secondary border border-border hover:border-neon/50 hover:text-white'
                }`}
            >
              {t('filter_all')}
            </button>
            {categoryKeys.map((catKey) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === catKey
                    ? 'bg-neon text-black'
                    : 'bg-dark-elevated text-text-secondary border border-border hover:border-neon/50 hover:text-white'
                  }`}
              >
                {t(`categories.${catKey}`)}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProjectKey(key)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-dark border border-border card-hover">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${projectAssets[key].image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                    {/* Result Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-neon/20 border border-neon/30">
                      <span className="text-neon text-xs font-mono font-medium">{t(`items.${key}.result`)}</span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-dark/80 border border-border">
                      <span className="text-white text-xs">{t(`items.${key}.category`)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-text-secondary text-sm mb-2">{t(`items.${key}.client`)}</p>
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-neon transition-colors">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {t(`items.${key}.shortDesc`)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {projectAssets[key].tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {projectAssets[key].tags.length > 3 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border">
                          +{projectAssets[key].tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProjectKey(null)}>
        <DialogContent className="max-w-4xl bg-dark-surface border-border text-white max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="p-2">
              {/* Header Image */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-8">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/50 to-transparent" />
                <button
                  onClick={() => setSelectedProjectKey(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark/80 flex items-center justify-center hover:bg-dark transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-neon/10 text-neon text-xs font-mono border border-neon/20">
                      {t(`items.${selectedProject.key}.category`)}
                    </span>
                    <span className="text-text-secondary text-sm">{t(`items.${selectedProject.key}.client`)}</span>
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-white mb-4">
                    {t(`items.${selectedProject.key}.title`)}
                  </h2>
                </div>

                {/* Result Highlight */}
                <div className="p-4 rounded-xl bg-neon/10 border border-neon/20">
                  <p className="text-neon font-medium">
                    <span className="font-bold">{t('dialog.result_label')}</span> {t(`items.${selectedProject.key}.result`)}
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">{t('dialog.context')}</h3>
                    <p className="text-text-secondary leading-relaxed">{t(`items.${selectedProject.key}.fullDesc`)}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">{t('dialog.challenge')}</h3>
                    <p className="text-text-secondary leading-relaxed">{t(`items.${selectedProject.key}.challenge`)}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">{t('dialog.solution')}</h3>
                    <p className="text-text-secondary leading-relaxed">{t(`items.${selectedProject.key}.solution`)}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-3">{t('dialog.technologies')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-dark-elevated text-neon text-sm font-mono border border-neon/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="btn-primary inline-flex items-center"
                  >
                    {t('dialog.cta')}
                    <ArrowUpRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
