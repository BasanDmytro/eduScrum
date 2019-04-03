import axios from 'axios';
import AUTH_ACTION_CONSTANTS from './authActionConstants';


export const login = (email, password) => dispatch => {
  return axios
    .post('http://localhost:3000/api/auth/login', { email, password })
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

export const registration = (user) => dispatch => {
  return axios
    .post('http://localhost:3000/api/auth/logup', { user })
    .then(res => {

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

export const getUsers = () => dispatch => {
  return axios
    .get('http://localhost:3000/api/auth/', { })
    .then(res => {
      const users = res.data;

      dispatch({
        type: AUTH_ACTION_CONSTANTS.GET_USERS,
        payload: users,
      });

      localStorage.setItem('users', JSON.stringify({
        users
      }));

      return users;
    })
    .catch(() => {
      logout()(dispatch);
      return Promise.reject();
    });
};
