import { handleActions } from 'redux-actions';
import initialState from '../stores/states';
import { types } from '../actions/userAction';

export default handleActions(
  {
    [types.LOGIN]: (state, action) => ({
      ...state,
      id: action.id,
      login: true,
      name: action.name,
      token: action.token,
    }),
    [types.LOGOUT]: (state, action) => ({
      ...state,
      id: '',
      login: false,
      name: '',
      token: null,
    }),
    [types.SET_USERNAME]: (state, action) => ({
      ...state,
      id: action.id,
      name: action.name,
    }),
  },
  initialState.user,
);
