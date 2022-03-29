import request from '../utils/request'
import { config } from '../config/config'

export function getRemotePlayBook(data) {
    return request({
      // url: 'https://api.kimacloud.com/client-dev/getPlayBook',
      url: config().remotePlayBook,
      method: 'post',
      data:data
    })
  }
export function getLocalPlayBook(data) {
    return request({
      // url: 'http://localhost:3002/getPlayBook',
      url: config().localPlayBook,
      method: 'post',
      data:data
    })
  }
export function getRemoteDefaultPlayBook(data) {
  return request({
    // url: 'https://api.kimacloud.com/client-dev/getApp',
    url: config().remoteDefaultPlayBook,
    method: 'post',
    data:data
  })
}