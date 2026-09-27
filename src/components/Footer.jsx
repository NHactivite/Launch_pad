import React from 'react';
import { StatusChip } from './Badge';

const LOGO_SVG = (
  <svg width="28" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b76dff" />
        <stop offset="100%" stopColor="#7bd0ff" />
      </linearGradient>
    </defs>
    <circle cx="256" cy="256" r="220" stroke="url(#footerLogoGrad)" strokeWidth="24" fill="none" opacity="0.3"/>
    <circle cx="256" cy="256" r="140" stroke="#ddb7ff" strokeWidth="16" fill="none" opacity="0.5"/>
    <polygon points="256,80 296,200 256,170 216,200" fill="#b76dff"/>
    <circle cx="256" cy="256" r="40" fill="url(#footerLogoGrad)"/>
    <circle cx="256" cy="256" r="12" fill="#0f131d"/>
  </svg>
);

const ARCHITECTURE_LINKS = [
  { label: 'Constellation Mesh', id: 'features' },
  { label: 'Telemetry Engine', id: 'mission-architecture' },
  { label: 'Orbital SDK', id: 'docs' },
  { label: 'Ground Station Relays', id: 'pricing' },
];

const MISSION_OPS_LINKS = [
  { label: 'Technical Docs', id: 'docs' },
  { label: 'Live Beacon Logs', id: 'telemetry' },
  { label: 'Payload Integrations', id: 'mission-architecture' },
  { label: 'Security & Compliance', id: 'pricing' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="w-full bg-surface-container-low mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter pb-space-xl">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              {LOGO_SVG}
              <span className="font-headline text-headline-sm text-on-surface font-bold">
                LaunchPad
              </span>
            </div>
            <p className="font-body text-body-md text-on-surface-variant max-w-sm">
              Deep-space telemetry streaming, orbital trajectory computing, and autonomous satellite
              constellation infrastructure for modern aerospace enterprises.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <StatusChip label="All Orbital Relays Operational" color="secondary" pulse />
            </div>
          </div>

          {/* Architecture Links */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono text-label-caps uppercase text-on-surface font-semibold tracking-wider">
              Architecture
            </span>
            {ARCHITECTURE_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="font-body text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mission Ops Links */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono text-label-caps uppercase text-on-surface font-semibold tracking-wider">
              Mission Ops
            </span>
            {MISSION_OPS_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="font-body text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono text-label-caps uppercase text-on-surface font-semibold tracking-wider">
              Telemetry Dispatch
            </span>
            <p className="font-body text-body-sm text-on-surface-variant">
              Receive orbital trajectory updates and technical payload bulletins.
            </p>
            <div className="flex flex-col gap-space-xs mt-space-xs">
              <div className="flex items-center rounded-lg bg-surface-container-high px-space-sm py-space-xs">
                <input
                  className="w-full bg-transparent font-body text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none"
                  placeholder="engineer@domain.aero"
                  type="email"
                />
                <button type="button" className="material-symbols-outlined text-secondary hover:text-primary transition-colors">
                  send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="font-mono text-label-code text-on-surface-variant">
              © 2025 LaunchPad Orbital Technologies Inc. Flight clearance sovereign.
            </span>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant">
            {['terminal', 'satellite_alt', 'hub', 'public'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
