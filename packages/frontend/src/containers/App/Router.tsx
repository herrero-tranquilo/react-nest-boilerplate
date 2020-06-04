import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../LandingPage';
import StudioPage from '../StudioPage';

export default function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={(): JSX.Element => <LandingPage />} />
      <Route path="/studio" component={(): JSX.Element => <StudioPage />} />
    </Switch>
  );
}
