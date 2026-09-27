import React from 'react';
import { Badge } from './Badge';

const TRUST_LOGOS = [
  { icon: 'rocket_launch', name: 'ASTRODYNAMICS', color: 'text-secondary' },
  { icon: 'satellite_alt', name: 'NOVASPACE', color: 'text-primary' },
  { icon: 'explore', name: 'HELIOS ORBITAL', color: 'text-secondary' },
  { icon: 'radar', name: 'STRATOS LABS', color: 'text-primary' },
  { icon: 'flight_takeoff', name: 'VECTOR AEROSPACE', color: 'text-secondary' },
];

export default function Hero() {
  return (
    <section id="features" className="relative w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-lg pb-space-xl">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Floating Badge */}
        <Badge
          icon="⚡"
          label="Orbital OS 4.0"
          sublabel="Autonomous Satellite Deployment Engine"
          className="mb-space-lg"
        />

        {/* Headline */}
        <h1 className="font-headline text-headline-xl lg:text-display-hero tracking-tight font-extrabold text-on-surface mb-space-md leading-none">
          Deploy Spacecraft Payload at the{' '}
          <span className="gradient-text">Speed of Software.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-xl">
          The unified mission control operating system for commercial satellite constellations,
          trajectory optimization, and real-time deep space telemetry.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto">
          <a
            href="#pricing"
            className="w-full sm:w-auto btn-primary flex items-center justify-center gap-space-sm text-headline-sm"
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
          <button className="w-full sm:w-auto btn-glass flex items-center justify-center gap-space-sm" type="button">
            <span
              className="material-symbols-outlined text-secondary text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_circle
            </span>
            <span className="font-body text-body-md font-semibold">Schedule Orbital Demo</span>
          </button>
        </div>

        {/* Trust Bar */}
        <div className="mt-space-xl pt-space-lg flex flex-col items-center gap-space-md w-full">
          <span className="font-mono text-label-caps uppercase tracking-widest text-outline">
            Trusted by next-gen aerospace teams & launch operators
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-space-xl gap-y-space-md text-on-surface-variant font-mono text-label-code opacity-75">
            {TRUST_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 hover:opacity-100 transition-opacity"
              >
                <span className={`material-symbols-outlined text-[20px] ${logo.color}`}>
                  {logo.icon}
                </span>
                <span className="font-bold tracking-wider">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
