import React, { useState } from 'react';
import { SectionBadge } from './Badge';

const PLANS = [
  {
    tier: 'Explorer Tier',
    tierColor: 'text-secondary',
    title: 'CubeSat / Research',
    description:
      'For university research labs, academic missions, and single-craft flight demonstrations.',
    price: '$2,400',
    priceAnnual: '$1,920',
    priceSuffix: '/ satellite / mo',
    priceGradient: null,
    features: [
      { text: 'Up to 2 ground station relays', included: true },
      { text: 'Daily trajectory recalculation batch', included: true },
      { text: 'Standard REST / WebSocket telemetry API', included: true },
      { text: '99.9% ground station uptime SLA', included: true },
      { text: 'Autonomous thruster phasing', included: false },
    ],
    cta: 'Deploy Explorer',
    ctaClass:
      'bg-surface-container-highest text-on-surface hover:bg-surface-bright',
    featured: false,
  },
  {
    tier: 'Commercial Mesh',
    tierColor: 'text-primary',
    title: 'Orbital Constellation',
    description:
      'Full autonomous constellation syncing, sub-second telemetry, and commercial mission priority.',
    price: '$7,900',
    priceAnnual: '$6,320',
    priceSuffix: '/ satellite / mo',
    priceGradient: 'from-primary to-secondary',
    features: [
      { text: '18 global ground stations & polar mesh', included: true },
      { text: 'Sub-second telemetry downlink stream', included: true },
      { text: 'Autonomous collision avoidance engine', included: true },
      { text: 'Live OCI container payload orchestration', included: true },
      { text: '24/7 dedicated flight engineer flight room', included: true },
    ],
    cta: 'Launch Constellation',
    ctaClass:
      'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary shadow-[0_0_30px_rgba(183,109,255,0.5)]',
    featured: true,
    badge: 'Most Popular Orbital Tier',
  },
  {
    tier: 'Sovereign & Defense',
    tierColor: 'text-secondary',
    title: 'Deep Space / Gov',
    description:
      'Dedicated high-bandwidth transponders, lunar trajectory, and air-gapped mission operations.',
    price: 'Custom',
    priceAnnual: 'Custom',
    priceSuffix: '/ enterprise contract',
    priceGradient: null,
    features: [
      { text: 'Lunar, Lagrange Point (L1/L2) orbits', included: true },
      { text: 'Dedicated Ka/X-band transponder allocations', included: true },
      { text: 'Custom radiation-hardened Linux kernels', included: true },
      { text: 'On-prem ground dish command integration', included: true },
      { text: 'ITAR & sovereign defense compliance', included: true },
    ],
    cta: 'Contact Aerospace Solutions',
    ctaClass:
      'bg-surface-container-highest text-on-surface hover:bg-surface-bright',
    featured: false,
  },
];

export default function PricingTable() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="w-full bg-surface-container-lowest/90 py-space-xl relative">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <SectionBadge icon="monetization_on" label="Deployment Tiers" color="secondary" />
          <h2 className="font-headline text-headline-xl font-bold text-on-surface mb-space-sm mt-space-sm">
            Predictable Pricing for Any Altitude
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-space-lg">
            From single academic technology demonstrators to mega-constellations spanning thousands
            of sovereign orbital assets.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-surface-container-high/80 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`px-space-md py-1.5 rounded-full font-body text-body-sm font-semibold transition-all duration-200 ${
                !annual
                  ? 'bg-primary-container text-on-primary-container shadow-md font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`px-space-md py-1.5 rounded-full font-body text-body-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                annual
                  ? 'bg-primary-container text-on-primary-container shadow-md font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Annual Orbit</span>
              <span className="font-mono text-[10px] bg-primary text-on-primary px-1.5 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-xl p-space-xl flex flex-col justify-between ${
                plan.featured
                  ? 'bg-surface-container-high/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(183,109,255,0.35)] -mt-2 lg:-mt-4'
                  : 'bg-surface-container/70 backdrop-blur-xl shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-space-md py-0.5 rounded-full bg-primary-container text-on-primary-container font-mono text-label-caps uppercase tracking-wider font-extrabold shadow-md whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Tier Label */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-label-caps uppercase ${plan.tierColor} font-bold tracking-widest`}
                  >
                    {plan.tier}
                  </span>
                  {plan.featured && (
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                <h3 className="font-headline text-headline-lg font-bold text-on-surface mt-space-xs">
                  {plan.title}
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant mt-2 mb-space-lg">
                  {plan.description}
                </p>

                {/* Price */}
                <div
                  className={`flex items-baseline gap-space-xs mb-space-lg pb-space-md p-space-md rounded-lg ${
                    plan.featured
                      ? 'bg-surface-container-lowest/60'
                      : 'bg-surface-container-low/50'
                  }`}
                >
                  <span
                    className={`font-headline text-headline-xl font-extrabold ${
                      plan.priceGradient
                        ? `text-transparent bg-clip-text bg-gradient-to-r ${plan.priceGradient}`
                        : 'text-on-surface'
                    }`}
                  >
                    {annual ? plan.priceAnnual : plan.price}
                  </span>
                  <span className="font-body text-body-md text-on-surface-variant">
                    {plan.priceSuffix}
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-space-sm font-body text-body-sm text-on-surface mb-space-lg">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-space-sm ${
                        !feature.included ? 'text-outline' : ''
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          feature.included
                            ? plan.featured
                              ? 'text-primary'
                              : 'text-secondary'
                            : 'text-outline'
                        }`}
                      >
                        {feature.included
                          ? plan.featured
                            ? 'verified'
                            : 'check_circle'
                          : 'cancel'}
                      </span>
                      <span className={plan.featured && feature.included ? 'font-medium' : ''}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#"
                className={`w-full py-3${plan.featured ? '.5' : ''} rounded-lg text-center font-body text-body-md font-${
                  plan.featured ? 'bold' : 'semibold'
                } transition-all duration-300 shadow-sm block ${plan.ctaClass}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
