import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

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
  applyMiddleware(thunkMiddleware, stringMiddlewate, logMiddleware)
);

const delayedActionCreator = timeout => dispatch => {
  setTimeout(
    () =>
      dispatch({
        type: 'DELAYED_ACTION'
      }),
    timeout
  );
};

store.dispatch(delayedActionCreator(3000));

export default store;
