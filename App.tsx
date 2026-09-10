import React, { useState } from 'react';
import { Concept1DualDepth } from './Concept1DualDepth';
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
    setTimeout(() => {
      window.scrollTo(0, scrollPos);
    }, 0);
  };

  // Enroll button on curriculum page
  const goToEnroll = () => {
    setView('landing');
    setTimeout(() => {
      const waitlistSection = document.getElementById('scarcity-waitlist') || document.getElementById('pricing');
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Render secondary sub-pages if navigated away from landing
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
    <Concept1DualDepth onNavigate={handleNavigate} />
  );
}
