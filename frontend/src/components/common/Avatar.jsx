import React, { useState } from 'react';

/**
 * Avatar component with graceful fallback when external CDN images fail to load.
 * Falls back to a colored initials badge matching the MedPulse design system.
 */
export const Avatar = ({ src, alt = '', className = '', fallbackClass = '' }) => {
  const [failed, setFailed] = useState(false);

  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0]?.[0]?.toUpperCase() ?? '?';
  };

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-primary-fixed text-primary font-semibold select-none ${className} ${fallbackClass}`}
        aria-label={alt}
        title={alt}
      >
        <span className="text-[0.6em] leading-none">{getInitials(alt)}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};
