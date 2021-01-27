import api from './index'
// axios
import request from '@/utils/request'

// 书籍详情
export function getBookInfo(params) {
  return request({
    url: api.BookInfo,
    method: 'get',
    params
  })
}