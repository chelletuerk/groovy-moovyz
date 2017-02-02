const user = (state = {}, action) => {
  switch (action.type) {

  case 'SIGN_IN' :
    return {
      email: action.email,
      password: action.password,
      emailKey: action.emailKey,
      passwordKey: action.passwordKey
    }

  default:
    return state;
  }
}

export default user;
