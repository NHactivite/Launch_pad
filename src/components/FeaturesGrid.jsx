import React from 'react';
import { SectionBadge } from './Badge';

const FEATURES = [
  {
    icon: 'navigation',
    badge: 'AI TRAJECTORY',
    badgeColor: 'text-secondary',
    title: 'Autonomous Trajectory Sync',
    description:
      'Real-time orbital maneuvers, dynamic collision avoidance calculations, and automated constellation phasing managed by on-orbit predictive models.',
    telemetry: {
      header: 'LEO DECONFLICTION',
      status: 'AUTO-RESOLVED',
      statusColor: 'text-secondary',
      rows: [
        { label: 'Pass Risk Score:', value: '0.00012%', color: 'text-primary' },
        { label: 'Thruster Firing Window:', value: 'T-04:12:00', color: 'text-secondary' },
      ],
    },
    cta: 'Explore Trajectory Engine',
    ctaColor: 'text-primary',
    ctaHover: 'group-hover:text-secondary',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(183,109,255,0.2)]',
    iconHoverBg: 'group-hover:bg-primary-container group-hover:text-on-primary-container',
    iconColor: 'text-primary',
  },
  {
    icon: 'cell_tower',
    badge: 'GROUND RELAY',
    badgeColor: 'text-primary',
    title: 'Sub-Millisecond Downlink',
    description:
      'Direct-to-ground quantum encrypted data relay routed across 60+ global ground stations with 99.999% relay uptime and dynamic optical beam steering.',
    telemetry: {
      header: 'POLAR GROUND MESH',
      status: 'CONNECTED',
      statusColor: 'text-secondary',
      progressBar: { value: 94, label: '120 Gbps' },
      subtitle: 'Inuvik • Svalbard • Troll Station synced',
    },
    cta: 'Inspect Ground Relays',
    ctaColor: 'text-secondary',
    ctaHover: 'group-hover:text-primary',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(123,208,255,0.2)]',
    iconHoverBg: 'group-hover:bg-secondary-container group-hover:text-on-secondary-container',
    iconColor: 'text-secondary',
  },
  {
    icon: 'terminal',
    badge: 'CONTAINER OS',
    badgeColor: 'text-secondary',
    title: 'Payload Virtualization',
    description:
      'Deploy OCI-compliant container software directly to radiation-hardened flight computers with zero-downtime over-the-air firmware orchestration.',
    telemetry: {
      header: 'RAD-HARD RUNTIME',
      status: 'ISOLATED',
      statusColor: 'text-primary',
      terminal: {
        command: '$ lp deploy --container=optics:v2.4',
        result: '> Verified: Fault tolerant memory scrub',
      },
    },
    cta: 'Read Software Architecture',
    ctaColor: 'text-primary',
    ctaHover: 'group-hover:text-secondary',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(183,109,255,0.2)]',
    iconHoverBg: 'group-hover:bg-primary-container group-hover:text-on-primary-container',
    iconColor: 'text-primary',
  },
];

function TelemetryBlock({ data }) {
  return (
    <div className="p-space-md rounded-lg bg-surface-container-lowest/80 mb-space-md">
      <div className="flex items-center justify-between font-mono text-[11px] text-on-surface-variant mb-2">
        <span>{data.header}</span>
        <span className={data.statusColor}>{data.status}</span>
      </div>

      {data.rows && (
        <div className="space-y-1.5 font-mono text-xs">
          {data.rows.map((row) => (
            <div key={row.label} className="flex justify-between text-on-surface">
              <span>{row.label}</span>
              <span className={`${row.color} font-semibold`}>{row.value}</span>
            </div>
          ))}
        </div>
      )}

      {data.progressBar && (
        <>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-surface-bright h-2 rounded-full overflow-hidden">
              <div
                className="bg-secondary h-full transition-all duration-1000"
                style={{ width: `${data.progressBar.value}%` }}
              />
            </div>
            <span className="font-mono text-xs text-on-surface font-bold">
              {data.progressBar.label}
            </span>
          </div>
          {data.subtitle && (
            <span className="font-mono text-[10px] text-outline mt-1 block">{data.subtitle}</span>
          )}
        </>
      )}

      {data.terminal && (
        <div className="font-mono text-xs">
          <p className="text-on-surface font-semibold truncate">{data.terminal.command}</p>
          <p className="text-outline text-[11px] mt-1">{data.terminal.result}</p>
        </div>
      )}
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
        <SectionBadge icon="hub" label="Mission Capabilities" color="primary" />
        <h2 className="font-headline text-headline-xl font-bold text-on-surface mb-space-sm mt-space-sm">
          Precision Infrastructure Built for Orbit
        </h2>
        <p className="font-body text-body-lg text-on-surface-variant">
          LaunchPad abstracts the volatile physics of spaceflight operations into robust,
          autonomous cloud APIs and radiation-proof runtime environments.
        </p>
      </div>

      {/* 3-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className={`group relative rounded-xl glass-card glass-card-hover p-space-lg flex flex-col justify-between ${feature.hoverGlow}`}
          >
            <div>
              {/* Icon and Badge */}
              <div className="flex items-center justify-between mb-space-md">
                <div
                  className={`w-12 h-12 rounded-lg bg-surface-bright flex items-center justify-center ${feature.iconColor} ${feature.iconHoverBg} transition-colors`}
                >
                  <span className="material-symbols-outlined text-[26px]">{feature.icon}</span>
                </div>
                <span
                  className={`font-mono text-label-caps px-space-sm py-1 rounded bg-surface-bright ${feature.badgeColor}`}
                >
                  {feature.badge}
                </span>
              </div>

              <h3 className="font-headline text-headline-md font-bold text-on-surface mb-space-sm">
                {feature.title}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant mb-space-md">
                {feature.description}
              </p>

              {/* Telemetry Visual */}
              <TelemetryBlock data={feature.telemetry} />
            </div>

            {/* CTA Link */}
            <div
              className={`pt-space-sm flex items-center gap-space-xs ${feature.ctaColor} font-body text-body-md font-semibold ${feature.ctaHover} transition-colors`}
            >
              <span>{feature.cta}</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
