import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  index: number;
  featured?: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  slug,
  index,
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group"
      >
        <Link to={`/blog/${slug}`} className="block">
          <div className="grid lg:grid-cols-2 gap-8 rounded-2xl bg-dark-surface border border-border overflow-hidden card-hover">
            <div className="relative h-64 lg:h-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/50 to-transparent lg:bg-gradient-to-l" />
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-neon/10 text-neon text-xs font-mono border border-neon/20">
                  {category}
                </span>
                <span className="text-text-secondary text-sm">{date}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4 group-hover:text-neon transition-colors">
                {title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-text-secondary text-sm">
                  <Clock size={16} className="mr-2" />
                  {readTime}
                </div>
                <span className="flex items-center text-neon font-medium">
                  Lire l'article
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/blog/${slug}`} className="block h-full">
        <div className="h-full rounded-2xl bg-dark-surface border border-border overflow-hidden card-hover">
          <div className="relative h-48 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-neon/10 text-neon text-xs font-mono">
                {category}
              </span>
              <span className="text-text-secondary text-xs">{date}</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-neon transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
              {excerpt}
            </p>
            <div className="flex items-center text-text-secondary text-xs">
              <Clock size={14} className="mr-1.5" />
              {readTime}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
