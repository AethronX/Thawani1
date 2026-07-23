import React from 'react';
import { SectionReveal, SectionRevealItem, ItemAnimationPreset } from './SectionReveal';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  stagger = true,
  staggerDelay = 0.1,
}) => {
  return (
    <SectionReveal
      id={id}
      delay={delay}
      staggerDelay={stagger ? staggerDelay : 0}
      className={className}
    >
      {children}
    </SectionReveal>
  );
};

export const AnimatedItem: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  preset?: ItemAnimationPreset;
}> = ({
  children,
  className = '',
  preset = 'fadeUp',
}) => {
  return (
    <SectionRevealItem preset={preset} className={className}>
      {children}
    </SectionRevealItem>
  );
};

