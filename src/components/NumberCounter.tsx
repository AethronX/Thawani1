import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

export interface NumberCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  formatter?: (val: number) => string;
  once?: boolean;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className = '',
  formatter,
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-40px' });
  const motionValue = useMotionValue(0);
  
  // Spring animation for realistic momentum
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const [displayValue, setDisplayValue] = useState<string>(() => {
    return prefix + (0).toFixed(decimals) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      let formatted: string;
      if (formatter) {
        formatted = formatter(latest);
      } else {
        const numStr = latest.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        formatted = `${prefix}${numStr}${suffix}`;
      }
      setDisplayValue(formatted);
    });

    return () => unsubscribe();
  }, [springValue, decimals, prefix, suffix, formatter]);

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
};

export default NumberCounter;
