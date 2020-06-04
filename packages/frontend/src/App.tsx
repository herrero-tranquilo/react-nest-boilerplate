import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';

import { translationMessages } from './translations';
import GlobalizationProvider from './containers/GlobalizationProvider';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <ConnectedRouter history={history}>
        <GlobalizationProvider messages={translationMessages}>
          <App />
        </GlobalizationProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
