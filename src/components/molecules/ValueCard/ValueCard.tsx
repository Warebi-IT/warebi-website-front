import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { GlowingBorderCard } from '@/components/atoms/ui/GlowingBorderCard';
import { SpotlightCard } from '@/components/atoms/ui/SpotlightCard';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ValueCard({ icon: Icon, title, description, index }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlowingBorderCard>
        <SpotlightCard className="rounded-2xl bg-dark-surface border border-border p-6 flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
            <Icon size={24} className="text-neon" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">{title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
          </div>
        </SpotlightCard>
      </GlowingBorderCard>
    </motion.div>
  );
}
