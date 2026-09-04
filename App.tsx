import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import { CurriculumPage } from './CurriculumPage';
import { BusinessKPIsPage } from './BusinessKPIsPage';
import { ContactPage } from './ContactPage';

type ViewState = 'landing' | 'curriculum' | 'business-kpis' | 'contact';

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [scrollPos, setScrollPos] = useState(0);

  // Navigate to target page
  const handleNavigate = (page: string) => {
    setScrollPos(window.scrollY);
    if (page === 'curriculum') setView('curriculum');
    else if (page === 'business-kpis') setView('business-kpis');
    else if (page === 'contact') setView('contact');
    else setView('landing');
    window.scrollTo(0, 0);
  };

  // Back button functionality: restores scroll position
  const goBack = () => {
    setView('landing');
    // Using setTimeout to ensure the DOM has rendered the landing page before scrolling
    setTimeout(() => {
      window.scrollTo(0, scrollPos);
    }, 0);
  };

  // Enroll button on curriculum page: goes to pricing section on landing page
  const goToEnroll = () => {
    setView('landing');
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (view === 'curriculum') {
    return <CurriculumPage onBack={goBack} onEnroll={goToEnroll} />;
  }

  if (view === 'business-kpis') {
    return <BusinessKPIsPage onBack={goBack} onEnroll={goToEnroll} />;
  }

  if (view === 'contact') {
    return <ContactPage onBack={goBack} />;
  }

  return (
    <LandingPage onNavigate={handleNavigate} />
  );
}