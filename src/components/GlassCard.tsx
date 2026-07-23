import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = false,
  hoverEffect = true,
  onClick,
  id,
}) => {
  return (
    <motion.div
      id={id}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl bg-[var(--bg-subtle)] backdrop-blur-xl border border-[var(--border-subtle)] shadow-[var(--card-shadow)] transition-all duration-300 text-[var(--text-primary)] ${
        glow ? 'border-[var(--green-500)]/40 shadow-md' : 'hover:border-[var(--border-strong)]'
      } ${className}`}
    >
      {/* Premium Surface Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent opacity-70 pointer-events-none" />
      
      {/* Subtle Hover Ambient Glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-[var(--green-500)]/0 via-[var(--green-500)]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
