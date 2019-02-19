import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export default function configureStore(initialState) {
  const middlewares = [];
  middlewares.push(logger);
  middlewares.push(thunk);

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares, reduxImmutableStateInvariant())
  );
}
