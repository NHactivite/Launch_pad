import React from 'react';

export function Badge({ icon, label, sublabel, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container/70 backdrop-blur-md shadow-[0_0_20px_rgba(183,109,255,0.2)] ${className}`}>
      {icon && (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-container text-on-primary-container text-[12px] font-bold">
          {icon}
        </span>
      )}
      <span className="font-mono text-label-caps uppercase text-secondary tracking-widest">
        {label}
      </span>
      {sublabel && (
        <>
          <span className="w-1 h-1 rounded-full bg-outline" />
          <span className="font-body text-body-sm text-on-surface-variant">{sublabel}</span>
        </>
      )}
    </div>
  );
}

export function SectionBadge({ icon, label, color = 'primary' }) {
  const colorClass = color === 'secondary' ? 'text-secondary' : 'text-primary';
  return (
    <div className="section-badge">
      {icon && (
        <span className={`material-symbols-outlined text-[16px] ${colorClass}`}>
          {icon}
        </span>
      )}
      <span className={`font-mono text-label-caps uppercase tracking-widest ${colorClass}`}>
        {label}
      </span>
    </div>
  );
}

export function StatusChip({ label, color = 'secondary', pulse = false }) {
  const bgMap = {
    secondary: 'bg-secondary',
    primary: 'bg-primary',
    error: 'bg-error',
  };
  return (
    <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high">
      <span className={`w-2 h-2 rounded-full ${bgMap[color]} ${pulse ? 'animate-pulse' : ''}`} />
      <span className="font-mono text-label-caps text-secondary uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
