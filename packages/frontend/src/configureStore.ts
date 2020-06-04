import { History } from 'history';
import { combineReducers, Store, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import { globalizationProviderStore } from './containers/GlobalizationProvider/reducer';

const createRootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    [globalizationProviderStore.name]: globalizationProviderStore.reducer,
  });

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

export type RootStateType = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(routerMiddleware(history))),
  );

  return store;
}
