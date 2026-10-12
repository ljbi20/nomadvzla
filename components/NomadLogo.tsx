import React from 'react';
import logoImg from '../assets/images/logo-04.png';

interface NomadLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  dotColor?: string;
}

export const NomadApertureIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:rotate-12 ${className}`}
      aria-label="nomad.vzla aperture logo"
    >
      {/* Outer circular ring */}
      <circle cx="50" cy="50" r="46" stroke="#EF233C" strokeWidth="8" fill="none" />

      {/* 6 authentic geometric camera aperture blades creating the central hexagon */}
      <g fill="#EF233C">
        {/* Blade 1 (0 deg) */}
        <path d="M 50 4 A 46 46 0 0 1 89.8 27 L 61 43.7 L 50 24.6 Z" />
        {/* Blade 2 (60 deg) */}
        <path d="M 89.8 27 A 46 46 0 0 1 89.8 73 L 61 56.3 L 72 37.2 Z" />
        {/* Blade 3 (120 deg) */}
        <path d="M 89.8 73 A 46 46 0 0 1 50 96 L 39 76.9 L 61 76.9 Z" />
        {/* Blade 4 (180 deg) */}
        <path d="M 50 96 A 46 46 0 0 1 10.2 73 L 39 56.3 L 28 75.4 Z" />
        {/* Blade 5 (240 deg) */}
        <path d="M 10.2 73 A 46 46 0 0 1 10.2 27 L 39 43.7 L 28 24.6 Z" />
        {/* Blade 6 (300 deg) */}
        <path d="M 10.2 27 A 46 46 0 0 1 50 4 L 61 23.1 L 39 23.1 Z" />
      </g>
    </svg>
  );
};

export const NomadLogo: React.FC<NomadLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const heights = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-16',
  };

  const heightClass = heights[size];

  if (showText) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={logoImg}
          alt="nomad.vzla"
          className={`${heightClass} w-auto object-contain`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  const iconSizes = {
    sm: 28,
    md: 38,
    lg: 48,
    xl: 64,
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <NomadApertureIcon size={iconSizes[size]} />
    </div>
  );
};
