import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  result: string;
  tags: string[];
  image: string;
  index: number;
}

export default function ProjectCard({
  title,
  client,
  description,
  result,
  tags,
  image,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-dark-surface border border-border card-hover">
        {/* Image */}
        <div className="relative h-56 lg:h-64 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/50 to-transparent" />
          
          {/* Result Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-neon/20 border border-neon/30">
            <span className="text-neon text-sm font-mono font-medium">{result}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-text-secondary text-sm mb-1">{client}</p>
              <h3 className="text-xl font-heading font-bold text-white group-hover:text-neon transition-colors">
                {title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={20} className="text-neon" />
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
