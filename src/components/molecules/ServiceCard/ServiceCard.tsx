import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  index: number;
  learnMore?: string;
}

export default function ServiceCard({ icon: Icon, title, description, link, index, learnMore = 'En savoir plus' }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={link}
        className="group block h-full p-6 lg:p-8 rounded-2xl bg-dark-surface border border-border card-hover"
      >
        <div className="flex flex-col h-full">
          <div className="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors">
            <Icon size={28} className="text-neon" />
          </div>

          <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-neon transition-colors">
            {title}
          </h3>

          <p className="text-text-secondary text-sm leading-relaxed flex-grow">
            {description}
          </p>

          <div className="mt-6 flex items-center text-neon text-sm font-medium">
            <span>{learnMore}</span>
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
