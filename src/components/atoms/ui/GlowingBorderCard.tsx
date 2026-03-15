import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowingBorderCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowingBorderCard({ children, className }: GlowingBorderCardProps) {
  return (
    <div className={cn('relative group/glow', className)}>
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-neon/50 via-neon/20 to-neon/40 opacity-0 group-hover/glow:opacity-100 blur-sm transition-opacity duration-300" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
