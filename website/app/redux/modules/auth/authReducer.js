import AUTH_ACTION_CONSTANTS from './authActionConstants';

const defaultState = {
  user: localStorage.getItem('loginData') || '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_ACTION_CONSTANTS.LOGIN:
      return handleLogin(state, action.payload);

    case AUTH_ACTION_CONSTANTS.LOGOUT:
      return handleLogout(state, action.payload);

    default:
      return state;
  }
};

function handleLogin(state, user) {
  return {...state, user};
}

function handleLogout(state) {
  return {...state, user: null};
}
