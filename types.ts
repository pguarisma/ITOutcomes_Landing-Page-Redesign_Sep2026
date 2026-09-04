import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface CurriculumItem {
  module: string;
  title: string;
  duration: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}