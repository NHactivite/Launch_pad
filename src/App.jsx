import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TelemetryDashboard from './components/TelemetryDashboard';
import MetricsBanner from './components/MetricsBanner';
import FeaturesGrid from './components/FeaturesGrid';
import PricingTable from './components/PricingTable';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-surface text-on-surface min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full pt-20 bg-surface flex-1">
        {/* Dynamic Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute top-[30%] -left-64 w-[600px] h-[600px] bg-secondary/10 blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute top-[65%] -right-64 w-[700px] h-[700px] bg-primary-container/15 blur-[150px] rounded-full" />

        {/* Section 1: Hero */}
        <Hero />

        {/* Hero Telemetry Dashboard Mockup */}
        <TelemetryDashboard />

        {/* Section 2: Metrics Social Proof */}
        <div className="mt-space-xl">
          <MetricsBanner />
        </div>

        {/* Section 3: Features Grid */}
        <FeaturesGrid />

        {/* Section 4: Pricing Table */}
        <PricingTable />

        {/* Section 5: Final CTA */}
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
