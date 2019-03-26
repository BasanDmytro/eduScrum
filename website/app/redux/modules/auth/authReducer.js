import AUTH_ACTION_CONSTANTS from './authActionConstants';

const defaultState = {
  user: localStorage.getItem('loginData') || '',
  users: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_ACTION_CONSTANTS.LOGIN:
      return handleLogin(state, action.payload);

    case AUTH_ACTION_CONSTANTS.LOGOUT:
      return handleLogout(state, action.payload);

    case AUTH_ACTION_CONSTANTS.GET_USERS:
      return handleGetUsers(state, action.payload);

    default:
      return state;
  }
};

function handleLogin(state, user) {
  return {...state, user};
}

function handleGetUsers(state, users) {
  return {...state, users};
}

function handleLogout(state) {
  return {...state, user: null};
}
