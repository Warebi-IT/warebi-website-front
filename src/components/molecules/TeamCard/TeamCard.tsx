import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/atoms/ui/SpotlightCard';
import { TiltCard } from '@/components/atoms/ui/TiltCard';

interface TeamCardProps {
  name: string;
  role: string;
  expertise: string;
  initials: string;
  index: number;
}

export default function TeamCard({ name, role, expertise, initials, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard>
        <SpotlightCard className="h-full rounded-2xl bg-dark-elevated border border-border hover:border-neon/40 transition-colors duration-300 p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon/30 to-neon/5 border border-neon/20 flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl font-heading font-bold text-neon">{initials}</span>
          </div>
          <h3 className="text-lg font-heading font-bold text-white mb-1">{name}</h3>
          <p className="text-neon text-sm mb-2">{role}</p>
          <p className="text-text-secondary text-xs">{expertise}</p>
        </SpotlightCard>
      </TiltCard>
    </motion.div>
  );
}
