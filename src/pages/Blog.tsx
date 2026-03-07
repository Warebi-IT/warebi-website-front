import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BlogCard from '../components/molecules/BlogCard/BlogCard';

const categoryKeys = ['data', 'dev', 'analytics', 'ai', 'automation'] as const;

const articleKeys = [
  { key: 'airflow', categoryKey: 'automation', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80', slug: 'automatiser-processus-data-airflow', featured: true },
  { key: 'powerbi', categoryKey: 'data', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', slug: 'bonnes-pratiques-power-bi', featured: false },
  { key: 'ia_pme', categoryKey: 'ai', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', slug: 'ia-pme-cas-usage', featured: false },
  { key: 'bigquery', categoryKey: 'data', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', slug: 'migration-bigquery-guide', featured: false },
  { key: 'seo', categoryKey: 'analytics', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80', slug: 'seo-data-driven', featured: false },
  { key: 'laravel', categoryKey: 'dev', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80', slug: 'api-rest-scalable-laravel', featured: false },
  { key: 'chatbots', categoryKey: 'ai', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80', slug: 'chatbots-intelligents', featured: false },
];

export default function Blog() {
  const { t } = useTranslation('blog');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = selectedCategory === 'all'
    ? articleKeys
    : articleKeys.filter((a) => a.categoryKey === selectedCategory);

  const featuredArticle = articleKeys.find((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured || selectedCategory !== 'all');

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

      {/* Blog Content */}
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

          {/* Featured Article */}
          {selectedCategory === 'all' && featuredArticle && (
            <div className="mb-12">
              <BlogCard
                title={t(`articles.${featuredArticle.key}.title`)}
                excerpt={t(`articles.${featuredArticle.key}.excerpt`)}
                category={t(`categories.${featuredArticle.categoryKey}`)}
                date={t(`articles.${featuredArticle.key}.date`)}
                readTime={t(`articles.${featuredArticle.key}.readTime`)}
                image={featuredArticle.image}
                slug={featuredArticle.slug}
                index={0}
                featured={true}
                readArticleLabel={t('read_article')}
              />
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <BlogCard
                key={article.slug}
                title={t(`articles.${article.key}.title`)}
                excerpt={t(`articles.${article.key}.excerpt`)}
                category={t(`categories.${article.categoryKey}`)}
                date={t(`articles.${article.key}.date`)}
                readTime={t(`articles.${article.key}.readTime`)}
                image={article.image}
                slug={article.slug}
                index={selectedCategory === 'all' ? index + 1 : index}
                readArticleLabel={t('read_article')}
              />
            ))}
          </div>

          {/* Empty State */}
          {regularArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary">{t('empty')}</p>
            </div>
          )}

          {/* Load More */}
          {regularArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <button className="btn-secondary">
                {t('load_more')}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              {t('newsletter.title')}<span className="text-neon">{t('newsletter.title_highlight')}</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              {t('newsletter.subtitle')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg bg-dark-elevated border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {t('newsletter.button')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
