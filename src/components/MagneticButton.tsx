import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

export interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Strength factor of the magnet pull (default 0.35)
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'custom';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.35,
  variant = 'custom',
  onClick,
  disabled,
  type = 'button',
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  // Base class presets if variant is specified
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#00D68F] to-[#00B377] text-slate-950 font-semibold px-6 py-3.5 rounded-full shadow-[0_0_25px_rgba(0,214,143,0.35)] hover:shadow-[0_0_35px_rgba(0,214,143,0.55)] border border-[#00D68F]/40 active:scale-95 transition-shadow duration-300',
    secondary:
      'bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-full border border-white/15 backdrop-blur-md active:scale-95 transition-colors duration-300',
    glass:
      'bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-xl shadow-lg active:scale-95 transition-all duration-300',
    outline:
      'bg-transparent hover:bg-[#00D68F]/10 text-[#00D68F] font-medium px-6 py-3 rounded-full border border-[#00D68F]/40 active:scale-95 transition-colors duration-300',
    custom: '',
  };

  const combinedClassName = `relative inline-flex items-center justify-center cursor-pointer select-none touch-manipulation ${
    variant !== 'custom' ? variantClasses[variant] : ''
  } ${className}`;

  return (
    <motion.button
      ref={ref}
      type={type}
      className={combinedClassName}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 15,
        mass: 0.15,
      }}
      {...props}
    >
      <motion.span
        className="relative z-10 flex items-center justify-center space-x-2 rtl:space-x-reverse pointer-events-none"
        animate={{
          x: position.x * 0.4,
          y: position.y * 0.4,
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 18,
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default MagneticButton;
