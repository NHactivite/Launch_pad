import React, { useState, useEffect } from 'react';

const LOGO_SVG = (
  <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b76dff" />
        <stop offset="100%" stopColor="#7bd0ff" />
      </linearGradient>
    </defs>
    <circle cx="256" cy="256" r="220" stroke="url(#logoGrad)" strokeWidth="24" fill="none" opacity="0.3"/>
    <circle cx="256" cy="256" r="140" stroke="#ddb7ff" strokeWidth="16" fill="none" opacity="0.5"/>
    <polygon points="256,80 296,200 256,170 216,200" fill="#b76dff"/>
    <circle cx="256" cy="256" r="40" fill="url(#logoGrad)"/>
    <circle cx="256" cy="256" r="12" fill="#0f131d"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Features', id: 'features' },
  { label: 'Mission Architecture', id: 'mission-architecture' },
  { label: 'Telemetry', id: 'telemetry' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Docs', id: 'docs' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('features');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveLink(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-space-md">
          {LOGO_SVG}
          <span className="font-headline text-headline-sm text-on-surface tracking-tight font-bold">
            LaunchPad
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-body text-body-md transition-colors px-space-sm py-space-xs rounded-lg ${
                activeLink === link.id
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-md">
          <button className="font-body text-body-sm text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors hidden sm:inline-block">
            Sign In
          </button>
          <button className="font-body text-body-sm px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-semibold transition-all duration-300 shadow-[0_0_24px_rgba(183,109,255,0.45)] hover:bg-primary hover:text-on-primary">
            Launch Console
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-space-xs">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden ml-2 text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-container/95 backdrop-blur-2xl border-t border-white/[0.06] px-margin-mobile py-space-lg">
          <nav className="flex flex-col gap-space-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-body text-body-md text-left px-space-md py-space-sm rounded-lg transition-colors ${
                  activeLink === link.id
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
