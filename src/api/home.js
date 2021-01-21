import api from './index'
// axios
import request from '@/utils/request'

// 轮播图
export function swipe() {
  return request({
    url: api.index.Swipe,
    method: 'get',
  })
}