import { motion } from 'framer-motion';
import { GlowingBorderCard } from '@/components/atoms/ui/GlowingBorderCard';
import { SpotlightCard } from '@/components/atoms/ui/SpotlightCard';

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export default function ProcessCard({ number, title, description, index, isLast = false }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      <GlowingBorderCard>
        <SpotlightCard className="rounded-2xl bg-dark-surface border border-border p-6 h-full">
          <div className="text-5xl font-heading font-bold text-neon/25 mb-4 leading-none">{number}</div>
          <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </SpotlightCard>
      </GlowingBorderCard>
      {!isLast && (
        <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-neon/40 to-transparent z-10" />
      )}
    </motion.div>
  );
}
