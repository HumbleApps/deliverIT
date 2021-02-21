import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createMemoryHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import logger from 'redux-logger';

const initState = {};

export const history = createMemoryHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
}

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);

/** Store state's Type */
export type RootState = ReturnType<typeof store.getState>;

export default store;
