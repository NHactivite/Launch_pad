import React from 'react';

const METRICS = [
  {
    value: '142',
    label: 'Satellites Deployed',
    description: 'Across LEO, MEO & GEO tracks',
    gradient: 'from-primary to-primary-container',
  },
  {
    value: '99.999%',
    label: 'Uplink Reliability',
    description: 'Carrier-grade transponder failover',
    gradient: 'from-secondary to-primary',
  },
  {
    value: '< 42ms',
    label: 'Ground Latency',
    description: 'Distributed ground mesh processing',
    gradient: 'from-primary to-secondary',
  },
  {
    value: '$420M+',
    label: 'Payload Secured',
    description: 'Zero in-orbit mission failures',
    gradient: 'from-primary-container to-secondary',
  },
];

export default function MetricsBanner() {
  return (
    <section id="mission-architecture" className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center">
              <span
                className={`font-headline text-headline-xl lg:text-display-hero font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient}`}
              >
                {metric.value}
              </span>
              <span className="font-mono text-label-caps uppercase text-secondary tracking-widest mt-space-xs">
                {metric.label}
              </span>
              <p className="font-body text-body-sm text-on-surface-variant mt-1">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
