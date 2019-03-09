import axios from 'axios';
import AUTH_ACTION_CONSTANTS from './authActionConstants';


export const login = (email, password) => dispatch => {
  return axios
    .post('http://localhost:3001/api/auth/login', { email, password })
    .then(res => {
      const user = {...res.data};

      dispatch({
        type: AUTH_ACTION_CONSTANTS.LOGIN,
        payload: user,
      });

      localStorage.setItem('loginData', JSON.stringify({
        user
      }));

      return user;
    })
    .catch(() => {
      logout()(dispatch);
      return Promise.reject();
    });
};

export const logout = () => dispatch => {
  dispatch({
    type: AUTH_ACTION_CONSTANTS.LOGOUT,
  });

  localStorage.removeItem('loginData');
};
