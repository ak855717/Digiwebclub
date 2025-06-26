import React from 'react';
import AboutSection from './section/AboutSection';
import InnovationSection from './section/InnovationSection';
import DigitalProductsSection from './section/DigitalProductsSection';
import MissionSection from './section/MissionSection';
import PricingSection from './section/PricingSection';
import AffordablePricing from './section/AffordablePricing';


export default function AgencyPage() {

  return (
    <div>
      <div className="min-h-screen">
        <AboutSection />
        <InnovationSection />
        <DigitalProductsSection />
        <MissionSection />
        <PricingSection />
        <AffordablePricing />
      </div>
    </div>
  )
}