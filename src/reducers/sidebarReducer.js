import { handleActions } from 'redux-actions';
import initialState from '../stores/states';
import { types } from '../actions/sidebarAction';

export default handleActions(
  {
    [types.CHANGE_ACTIVE]: (state, action) => ({
      ...state,
      defaultActive: action.defaultActive,
    }),
  },
  initialState.sidebar,
);
