import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


// 水印
const Watermark='WatermarkFlag'
export function getWatermark() {
  return Cookies.get(Watermark)
}

export function setWatermark(token) {
  return Cookies.set(Watermark, token)
}

export function removeWatermark() {
  return Cookies.remove(Watermark)
}
