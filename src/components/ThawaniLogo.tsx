import React from 'react';

export interface ThawaniLogoProps {
  variant?: 'green' | 'ink' | 'white' | 'monochrome';
  size?: number;
  showText?: boolean;
  showBadge?: boolean;
  isAr?: boolean;
  className?: string;
  progress?: number; // 0 to 100 for smile arc progress animation
}

export const ThawaniLogoMark: React.FC<{
  variant?: 'green' | 'ink' | 'white' | 'monochrome';
  size?: number;
  className?: string;
  progress?: number; // 0 to 100 for smile arc animation
}> = ({ variant = 'green', size = 36, className = '', progress }) => {
  // Color bindings based on variant token
  let smileColor = '#4CB944'; // Iconic Thawani Green
  let dotColor = '#4CB944';
  let accentDotColor = '#F0B44A'; // Frankincense Gold top dot

  if (variant === 'green') {
    smileColor = '#4CB944';
    dotColor = '#4CB944';
    accentDotColor = '#F0B44A';
  } else if (variant === 'ink') {
    smileColor = '#0C2717';
    dotColor = '#1D5231';
    accentDotColor = '#B47411';
  } else if (variant === 'white') {
    smileColor = '#FFFFFF';
    dotColor = '#FFFFFF';
    accentDotColor = '#F0B44A';
  } else if (variant === 'monochrome') {
    smileColor = 'currentColor';
    dotColor = 'currentColor';
    accentDotColor = 'currentColor';
  }

  // Calculate dash offsets if progress is supplied
  const arcLength = 32;
  const strokeDashoffset = progress !== undefined ? arcLength * (1 - Math.min(100, Math.max(0, progress)) / 100) : 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="thawani smile sovereign mark"
    >
      {/* Background Container Base */}
      <rect width="40" height="40" rx="12" fill={variant === 'white' ? 'rgba(255,255,255,0.1)' : 'rgba(76,185,68,0.08)'} />

      {/* Triple Sovereign Dots representing Arabic letter 'Thā' (ث) & Eyes */}
      <circle cx="13" cy="14" r="2.5" fill={dotColor} />
      <circle cx="27" cy="14" r="2.5" fill={dotColor} />
      <circle cx="20" cy="8" r="2.2" fill={accentDotColor} />

      {/* Background Unfilled Arc Path (when animating) */}
      {progress !== undefined && (
        <path
          d="M 10 24 C 14 33, 26 33, 30 24"
          stroke={smileColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeOpacity="0.2"
        />
      )}

      {/* Iconic Thawani Geometric Smile Arc (Signature Smile Motif) */}
      <path
        d="M 10 24 C 14 33, 26 33, 30 24"
        stroke={smileColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={progress !== undefined ? `${arcLength}` : undefined}
        strokeDashoffset={progress !== undefined ? `${strokeDashoffset}` : undefined}
        className="transition-all duration-300 ease-out"
      />
    </svg>
  );
};

export const ThawaniLogo: React.FC<ThawaniLogoProps> = ({
  variant = 'green',
  size = 36,
  showText = true,
  showBadge = true,
  isAr = false,
  className = '',
  progress,
}) => {
  return (
    <div className={`inline-flex items-center space-x-3 rtl:space-x-reverse ${className}`}>
      <div className="relative group flex-shrink-0">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--green-500)] to-[var(--forest-700)] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
        <div className="relative rounded-xl p-1 bg-[var(--bg-raised)] border border-[var(--border-strong)] flex items-center justify-center">
          <ThawaniLogoMark variant={variant} size={size} progress={progress} />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {/* Name strictly lowercase in English ('thawani') as per brand directive */}
            <span className="font-extrabold text-2xl tracking-tight text-[var(--text-primary)] font-display lowercase">
              {isAr ? 'ثوانـي' : 'thawani'}
            </span>
            {showBadge && (
              <span className="micro-label px-2 py-0.5 rounded-full bg-[var(--bg-subtle)] text-[var(--green-500)] border border-[var(--border-subtle)] font-mono">
                2035
              </span>
            )}
          </div>
          <span className="micro-label text-[var(--text-muted)] text-[10px] tracking-wider uppercase font-mono">
            {isAr ? 'منظومة المدفوعات السيادية' : 'Sovereign Payments'}
          </span>
        </div>
      )}
    </div>
  );
};

export default ThawaniLogo;
