import AUTH_ACTION_CONSTANTS from './authActionConstants';

const defaultState = {
  user: null,
  authorizedCompany: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_ACTION_CONSTANTS.LOGIN:
      return handleLogin(state, action.payload);

    case AUTH_ACTION_CONSTANTS.LOGOUT:
      return handleLogin(state, action.payload);

    case AUTH_ACTION_CONSTANTS.LOGIN_AS_COMPANY:
      return handleLoginAsCompany(state, action.payload);

    case AUTH_ACTION_CONSTANTS.LOGOUT_AS_COMPANY:
      return handleLogoutAsCompany(state);

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

function handleLoginAsCompany(state, company) {
  return {...state, authorizedCompany: company};
}

function handleLogoutAsCompany(state) {
  return {...state, authorizedCompany: null};
}
