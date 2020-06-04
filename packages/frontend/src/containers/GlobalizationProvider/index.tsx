import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { makeSelectLocale } from './selectors';

interface Props {
  locale: Locale;
  messages: Record<Locale, Record<string, string>>;
  children: React.ReactElement;
}

function LanguageProvider({ locale, messages, children }: Props): JSX.Element {
  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

export default connect(mapStateToProps)(LanguageProvider);
