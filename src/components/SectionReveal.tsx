import React from 'react';
import { motion, Variants } from 'motion/react';

export interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  staggerDelay?: number;
  delayChildren?: number;
  yOffset?: number;
  duration?: number;
  once?: boolean;
}

export type ItemAnimationPreset = 'fadeUp' | 'fadeIn' | 'scaleUp' | 'blurIn' | 'slideLeft' | 'slideRight';

export interface SectionRevealItemProps {
  children: React.ReactNode;
  className?: string;
  preset?: ItemAnimationPreset;
  yOffset?: number;
  duration?: number;
  delay?: number;
}

export const revealContainerVariants = (
  delay = 0,
  staggerDelay = 0.12,
  yOffset = 32,
  duration = 0.65,
  delayChildren = 0.05
): Variants => ({
  hidden: { 
    opacity: 0, 
    y: yOffset 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.16, 1, 0.3, 1],
      delay,
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const revealItemPresets: Record<ItemAnimationPreset, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.94, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 20 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
};

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  yOffset = 28,
  duration = 0.65,
  once = true,
}) => {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={revealContainerVariants(delay, staggerDelay, yOffset, duration, delayChildren)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionRevealItem: React.FC<SectionRevealItemProps> = ({
  children,
  className = '',
  preset = 'fadeUp',
  yOffset,
  duration,
  delay,
}) => {
  let variants = revealItemPresets[preset] || revealItemPresets.fadeUp;

  if (yOffset !== undefined || duration !== undefined || delay !== undefined) {
    variants = {
      hidden: {
        ...variants.hidden,
        ...(yOffset !== undefined ? { y: yOffset } : {}),
      },
      visible: {
        ...variants.visible,
        transition: {
          ...(typeof variants.visible?.transition === 'object' ? variants.visible.transition : {}),
          ...(duration !== undefined ? { duration } : {}),
          ...(delay !== undefined ? { delay } : {}),
        },
      },
    };
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

export default SectionReveal;

