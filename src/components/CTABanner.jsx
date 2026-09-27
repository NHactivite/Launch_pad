import React from 'react';

export default function CTABanner() {
  return (
    <section id="docs" className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl w-full">
      <div className="relative w-full rounded-2xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-space-xl overflow-hidden shadow-[0_0_60px_rgba(183,109,255,0.25)]">
        {/* Decorative Orbital Curves */}
        <svg
          className="absolute right-0 top-0 bottom-0 h-full w-1/2 opacity-25 pointer-events-none"
          fill="none"
          viewBox="0 0 500 500"
        >
          <circle cx="450" cy="250" r="300" stroke="#ddb7ff" strokeDasharray="6 6" strokeWidth="1.5" />
          <circle cx="450" cy="250" r="200" stroke="#7bd0ff" strokeWidth="1.5" />
          <circle cx="450" cy="250" r="120" stroke="#b76dff" strokeWidth="2" />
          <circle className="animate-pulse" cx="330" cy="250" fill="#ddb7ff" r="8" />
        </svg>

        <div className="relative z-10 max-w-2xl flex flex-col items-start gap-space-md">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-bright text-secondary font-mono text-label-caps uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">key</span>
            Instant Sandbox Authorization
          </div>

          <h2 className="font-headline text-headline-xl font-bold text-on-surface">
            Ready to launch your orbital mission?
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            Connect your spacecraft simulator or production flight hardware via our encrypted API
            gateway in under five minutes.
          </p>

          {/* Email Input + CTA */}
          <div className="w-full mt-space-sm flex flex-col sm:flex-row items-stretch gap-space-sm">
            <div className="flex-1 flex items-center bg-surface-container-lowest/90 px-space-md py-space-sm rounded-lg shadow-inner">
              <span className="font-mono text-primary mr-2 font-bold">&gt;</span>
              <input
                className="w-full bg-transparent font-mono text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                placeholder="developer@aerospace.io"
                type="email"
              />
            </div>
            <button
              type="button"
              className="px-space-xl py-space-sm rounded-lg bg-primary-container text-on-primary-container font-body text-body-md font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_0_25px_rgba(183,109,255,0.4)] whitespace-nowrap"
            >
              Generate Flight Key
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-space-md mt-space-xs font-mono text-xs text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              No Hardware Required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Full LEO Orbit Simulator Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
