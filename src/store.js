import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const logMiddleware = () => next => action => {
  console.log(action.type);
  return next(action);
};

const stringMiddlewate = () => next => action => {
  if (typeof action === 'string') {
    return next({
      type: action
    });
  }

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(stringMiddlewate, logMiddleware)
);

store.dispatch('HELLO_WORLD');

export default store;
