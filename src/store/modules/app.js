import storage from '../storage';
const state = {
  userName: '',
  token: '',
  loginStatus: false,
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_LOGIN_STATUS(state, status) {
    console.log('更换'+status)
    state.loginStatus = status
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    console.log("======>>>>设置了UserName："+name)
    commit('SET_USER_NAME', name)
    //同步设置到storage
    storage.setVal('USER_NAME', name)
  },
  // 设置token
  setToken({ commit }, token) {
    console.log("======>>>>设置了Token："+token)
    commit('SET_TOKEN', token)
    //设置登录状态
    if(token == '' || token == null){
      console.log("======>>>>设置了登录状态：未登录")
      commit('SET_LOGIN_STATUS', false)
      storage.setVal('LOGIN_STATUS', false)
    }else{
      console.log("======>>>>设置了登录状态：已登录")
      commit('SET_LOGIN_STATUS', true)
      storage.setVal('LOGIN_STATUS', true)
    }
    //同步设置到storage
    storage.setVal('TOKEN', token)
    
  },
  // 退出登录
  logout({ commit }) {
    console.log("======>>>>退出登录，清空状态：")
    commit('SET_USER_NAME', '')
    commit('SET_LOGIN_STATUS', '')
    commit('SET_LOGIN_STATUS', false)
    //同步设置到storage
    storage.setVal('USER_NAME', null)
    storage.setVal('TOKEN', null)
    storage.setVal('LOGIN_STATUS', false)
  },
}
export default {
  state,
  mutations,
  actions
}
