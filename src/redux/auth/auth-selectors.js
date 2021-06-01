const getIsAuthenticated = state => Boolean(state.auth.token);

const getUserName = state => state.auth.user.email;

export default { getIsAuthenticated: getIsAuthenticated, getUserName };
