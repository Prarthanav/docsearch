import React from 'react';

import { AlgoliaLogo } from './AlgoliaLogo';

export type FooterTranslations = Partial<{
  selectText: string;
  selectKeyAriaLabel: string;
  navigateText: string;
  navigateUpKeyAriaLabel: string;
  navigateDownKeyAriaLabel: string;
  closeText: string;
  closeKeyAriaLabel: string;
  searchByText: string;
}>;

type FooterProps = Partial<{
  translations: FooterTranslations;
}>;

export function Footer({ translations = {} }: FooterProps) {
  const {
    searchByText = 'Search by',
  } = translations;

  return (
    <>
      <div className="DocSearch-Logo">
        <AlgoliaLogo translations={{ searchByText }} />
      </div>
    </>
  );
}
