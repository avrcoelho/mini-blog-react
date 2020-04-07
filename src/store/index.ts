import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { PublicationsState } from './ducks/publications/types';

export interface ApplicationState {
  publications: PublicationsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
