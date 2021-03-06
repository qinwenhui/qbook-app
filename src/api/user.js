import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 退出登录
export function logout() {
  return request({
    url: api.Logout,
    method: 'get',
  })
}

// 用户信息 post 方法
export function getUserInfo() {
  return request({
    url: api.UserInfo,
    method: 'get',
    hideloading: true
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}
