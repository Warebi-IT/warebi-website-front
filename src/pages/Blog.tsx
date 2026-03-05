import { motion } from 'framer-motion';
import { useState } from 'react';
import BlogCard from '../components/molecules/BlogCard/BlogCard';

const categories = ['Tous', 'Data', 'Dev', 'Analytics', 'IA', 'Automatisation'];

const articles = [
  {
    title: 'Comment automatiser vos processus data avec Apache Airflow',
    excerpt: 'Découvrez comment orchestrer vos pipelines de données de manière fiable et scalable avec Airflow. Guide complet avec exemples concrets.',
    category: 'Automatisation',
    date: '15 Jan 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    slug: 'automatiser-processus-data-airflow',
    featured: true,
  },
  {
    title: '5 bonnes pratiques pour des tableaux de bord Power BI performants',
    excerpt: 'Optimisez vos dashboards Power BI pour des temps de chargement rapides et une meilleure expérience utilisateur.',
    category: 'Data',
    date: '10 Jan 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    slug: 'bonnes-pratiques-power-bi',
    featured: false,
  },
  {
    title: "L'IA au service des PME : 3 cas d'usage concrets",
    excerpt: 'Comment les petites et moyennes entreprises peuvent tirer parti de l\'intelligence artificielle sans budget illimité.',
    category: 'IA',
    date: '5 Jan 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    slug: 'ia-pme-cas-usage',
    featured: false,
  },
  {
    title: 'Migration vers BigQuery : guide complet étape par étape',
    excerpt: 'Tout ce que vous devez savoir pour migrer votre data warehouse vers Google BigQuery sans douleur.',
    category: 'Data',
    date: '28 Déc 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    slug: 'migration-bigquery-guide',
    featured: false,
  },
  {
    title: 'SEO data-driven : comment la data améliore votre référencement',
    excerpt: 'Utilisez les données pour prendre des décisions SEO éclairées et améliorer votre visibilité organique.',
    category: 'Analytics',
    date: '20 Déc 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    slug: 'seo-data-driven',
    featured: false,
  },
  {
    title: 'Construire une API REST scalable avec Laravel',
    excerpt: 'Les meilleures pratiques pour développer des APIs robustes et maintenables avec le framework PHP Laravel.',
    category: 'Dev',
    date: '15 Déc 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    slug: 'api-rest-scalable-laravel',
    featured: false,
  },
  {
    title: 'Chatbots intelligents : au-delà des FAQ basiques',
    excerpt: 'Comment créer des chatbots qui comprennent réellement le contexte et apportent de la valeur à vos utilisateurs.',
    category: 'IA',
    date: '8 Déc 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    slug: 'chatbots-intelligents',
    featured: false,
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredArticles = selectedCategory === 'Tous'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured || selectedCategory !== 'Tous');

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
              Insights & <span className="text-neon">Expertise</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Nos analyses, guides et retours d'expérience sur la data, le dev et l'IA.
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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-neon text-black'
                    : 'bg-dark-elevated text-text-secondary border border-border hover:border-neon/50 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Article */}
          {selectedCategory === 'Tous' && featuredArticle && (
            <div className="mb-12">
              <BlogCard {...featuredArticle} index={0} />
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <BlogCard
                key={article.slug}
                {...article}
                index={selectedCategory === 'Tous' ? index + 1 : index}
              />
            ))}
          </div>

          {/* Empty State */}
          {regularArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary">Aucun article dans cette catégorie pour le moment.</p>
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
                Charger plus d'articles
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
              Restez informé des <span className="text-neon">dernières tendances</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos meilleurs articles directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-3 rounded-lg bg-dark-elevated border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
