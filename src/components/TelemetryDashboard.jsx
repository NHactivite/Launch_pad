import React from 'react';

export default function TelemetryDashboard() {
  return (
    <div id="telemetry" className="mt-space-xl relative w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="rounded-xl glass-float overflow-hidden">
        {/* Cockpit HUD Header Bar */}
        <div className="h-12 bg-surface-container px-space-md flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <span className="w-3 h-3 rounded-full bg-error/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-secondary-container/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block" />
            <div className="h-4 w-[1px] bg-surface-bright mx-space-xs" />
            <span className="font-mono text-label-code text-on-surface-variant flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              SYS://LP-NODE-ORBITAL-7901.live
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <span className="font-mono text-label-caps uppercase text-secondary bg-surface-bright px-space-sm py-0.5 rounded">
              STATUS: NOMINAL
            </span>
            <span className="font-mono text-label-code text-on-surface-variant">
              UTC {new Date().toISOString().slice(11, 22)}
            </span>
          </div>
        </div>

        {/* Telemetry Dashboard Core */}
        <div className="p-space-md lg:p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-md">
          {/* Left Stats Panel */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            {/* Orbital Velocity */}
            <div className="metric-card flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="telemetry-label text-on-surface-variant">Orbital Velocity</span>
                <span className="material-symbols-outlined text-secondary text-[18px]">speed</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline text-headline-lg font-bold text-on-surface">7.67</span>
                <span className="font-mono text-label-code text-secondary font-medium">km / s</span>
              </div>
              <div className="w-full bg-surface-bright h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-gradient-to-r from-secondary to-primary h-full w-[84%] transition-all duration-1000" />
              </div>
              <span className="font-mono text-[11px] text-on-surface-variant mt-1">
                LEO Synced • Delta-V Margin +2.18%
              </span>
            </div>

            {/* Apogee / Perigee */}
            <div className="metric-card flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="telemetry-label text-on-surface-variant">Apogee / Perigee</span>
                <span className="material-symbols-outlined text-primary text-[18px]">altitude</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <div>
                  <span className="font-mono text-[11px] text-on-surface-variant block">APOGEE</span>
                  <span className="font-headline text-headline-sm font-bold text-on-surface">
                    542.4 <span className="text-xs font-normal text-outline">km</span>
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-surface-bright" />
                <div>
                  <span className="font-mono text-[11px] text-on-surface-variant block">PERIGEE</span>
                  <span className="font-headline text-headline-sm font-bold text-secondary">
                    538.1 <span className="text-xs font-normal text-outline">km</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Propulsion & Relays */}
            <div className="metric-card flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="telemetry-label text-on-surface-variant">Propulsion & Relays</span>
                <span className="material-symbols-outlined text-secondary text-[18px]">satellite</span>
              </div>
              {[
                { label: 'Hall Effect Thrusters', value: 'ONLINE (0.14N)', color: 'text-secondary' },
                { label: 'Inter-Sat Laser Mesh', value: '12/12 LOCKED', color: 'text-primary' },
                { label: 'Thermal Equilibrium', value: '294.2 K', color: 'text-on-surface-variant' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="font-body text-body-sm text-on-surface">{row.label}</span>
                  <span className={`font-mono text-label-code ${row.color} font-semibold`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Trajectory Flight View */}
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <div className="relative w-full h-80 rounded-lg bg-surface-container-lowest/80 overflow-hidden flex flex-col justify-between p-space-md">
              {/* Background Vector Radar Grid */}
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gridGlow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#b76dff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#7bd0ff" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <line stroke="#4d4354" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%" />
                <line stroke="#4d4354" strokeDasharray="4 4" strokeWidth="1" x1="50%" x2="50%" y1="0" y2="100%" />
                <circle cx="50%" cy="50%" fill="none" r="35%" stroke="#4d4354" strokeDasharray="2 4" strokeWidth="1" />
                <circle cx="50%" cy="50%" fill="none" r="20%" stroke="#4d4354" strokeWidth="1" />
                <path
                  d="M0,210 Q 180,60 360,180 T 720,120 T 1100,160"
                  fill="none"
                  stroke="url(#gridGlow)"
                  strokeWidth="3"
                />
                <circle className="animate-pulse" cx="360" cy="180" fill="#ddb7ff" r="6" />
                <circle cx="360" cy="180" fill="none" opacity="0.6" r="14" stroke="#b76dff" strokeWidth="1" />
                <circle cx="720" cy="120" fill="#7bd0ff" r="4" />
              </svg>

              {/* Real-time HUD Badges */}
              <div className="relative z-10 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-space-xs bg-surface-container/80 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-mono text-label-code text-on-surface">EPHEMERIS SGP4 VALIDATED</span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container/80 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-mono text-label-caps text-on-surface-variant uppercase">Collision Vector:</span>
                  <span className="font-mono text-label-code text-secondary font-semibold">0.000% PROB</span>
                </div>
              </div>

              {/* Terminal Log Footer */}
              <div className="relative z-10 bg-surface-container/90 backdrop-blur-md rounded-lg p-space-sm font-mono text-[12px] flex items-center justify-between text-on-surface-variant">
                <div className="flex items-center gap-space-sm overflow-hidden">
                  <span className="text-primary font-bold">TX_BURST &gt;&gt;</span>
                  <span className="truncate text-on-surface">
                    DOWNLINK 102.4 Gbps | Svalbard Ground Node active | AOS in +00:14:22
                  </span>
                </div>
                <span className="text-secondary shrink-0 pl-2">99.999% RT</span>
              </div>
            </div>

            {/* Bottom Sub-grid Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              {[
                { label: 'Orbital Inclination', value: '97.4°', unit: 'SSO' },
                { label: 'Orbital Period', value: '95.3', unit: 'min' },
                { label: 'Radiation Dose', value: '0.08', unit: 'rad/h' },
                { label: 'Constellation Sync', value: 'ACTIVE', unit: '', isHighlight: true },
              ].map((item) => (
                <div key={item.label} className="p-space-sm rounded-lg bg-surface-container/50 flex flex-col">
                  <span className="telemetry-label text-on-surface-variant">{item.label}</span>
                  <span className={`font-headline text-headline-sm font-bold ${item.isHighlight ? 'text-secondary' : 'text-on-surface'}`}>
                    {item.value}{' '}
                    {item.unit && <span className="font-mono text-xs text-secondary font-normal">{item.unit}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
