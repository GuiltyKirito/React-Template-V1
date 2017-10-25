import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sidebarReducer from './sidebarReducer';
import userReducer from './userReducer';

export default combineReducers({
  router: routerReducer,
  sidebar: sidebarReducer,
  user: userReducer,
});
