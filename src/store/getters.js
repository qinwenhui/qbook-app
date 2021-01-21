import storage from './storage';
const getters = {
  userName: state => {
    let name = state.app.userName;
    if(storage.getVal('USER_NAME') != null){
      name = storage.getVal('USER_NAME')
    }
    return name
  },
  token: state => {
    let token = state.app.token;
    if(storage.getVal('TOKEN') != null){
      token = storage.getVal('TOKEN')
    }
    return token
  },
  loginStatus: state => {
    let status = state.app.loginStatus;
    if(storage.getVal('LOGIN_STATUS') != null){
      status = storage.getVal('LOGIN_STATUS')
    }
    return status
  },
}
export default getters
