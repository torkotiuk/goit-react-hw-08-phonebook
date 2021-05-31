const getIsAuthenificated = state => Boolean(state.auth.token);

const getUserName = state => state.auth.user.email;

export default { getIsAuthenificated, getUserName };
