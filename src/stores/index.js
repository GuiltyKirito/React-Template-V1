import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rsasign from 'jsrsasign';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';
import { types } from '../actions/userAction';

export const history = createHistory();

// middlewares
let middlewares = [thunkMiddleware, routerMiddleware(history)];

// logger
const loggerMiddleware = createLogger({
  collapsed: true,
  stateTransformer: state => JSON.parse(JSON.stringify(state)),
});

let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, loggerMiddleware];
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const stores = createStore(reducers, enhancer);

// 更新token
const token = localStorage.getItem('token');
if (token) {
  stores.dispatch({
    type: types.LOGIN,
    token: token,
  });

  const JWS = rsasign.jws.JWS.parse(token);
  stores.dispatch({
    type: types.SET_USERNAME,
    id: JWS.payloadObj.sub,
    name: JWS.payloadObj.name,
  });
}

export default stores;
