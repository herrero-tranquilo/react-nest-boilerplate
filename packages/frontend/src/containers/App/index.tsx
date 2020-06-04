import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'theme/global-styles';
import theme from 'theme';

import Router from './Router';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
