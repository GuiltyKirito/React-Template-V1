import auth from '../requests/auth';
import rsasign from 'jsrsasign';
import * as api from '../constant/api';

/**
 * action types
 */
export const types = {
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
  SET_USERNAME: 'user/SET_USERNAME',
};

/**
 * action creators
 */
export const login = (username, password) => {
  return async dispatch => {
    try {
      const res = await auth.post(api.SIGN, {
        username: username,
        password: password,
      });

      const JWS = rsasign.jws.JWS.parse(res.data.token);
      dispatch({
        type: types.LOGIN,
        id: JWS.payloadObj.sub,
        name: JWS.payloadObj.name,
        token: res.data.token,
      });

      localStorage.setItem('token', res.data.token);

      return {
        status: res.status,
        statusText: res.statusText,
      };
    } catch (error) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
      };
    }
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');

    dispatch({
      type: types.LOGOUT,
    });
  };
};

export const setUsername = (id, name) => {
  return dispatch => {
    dispatch({
      type: types.SET_USERNAME,
      id: id,
      name: name,
    });
  };
};
