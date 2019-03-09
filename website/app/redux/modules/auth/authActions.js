import axios from 'axios';
import AUTH_ACTION_CONSTANTS from './authActionConstants';


export const login = (email, idToken, accessToken, expiresAt) => dispatch => {
  return axios
    .get('http://localhost:3001/api/talents/?email=${email}')
    .then(res => {
      const user = {...res.data.data[0]};
      user.profile.email = email;

      dispatch({
        type: AUTH_ACTION_CONSTANTS.LOGIN,
        payload: user,
      });

      localStorage.setItem('loginData', JSON.stringify({
        email, idToken, accessToken, expiresAt,
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
