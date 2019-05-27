import { API_URL } from '../config'

// Converts plain javascript object to uri string
export const convertObjToURIString = (params) => {
  const pairs = Object.keys(params)
    .filter(key => params[key] !== undefined && params[key] !== false)
    .map(key => `${key}=${params[key]}`)

  return '?' + pairs.join('&')
}

export const constructEndPoint = (resource, path = '', params = {}) => {
  const uriString = Object.keys(params).length === 0 ? '' : convertObjToURIString(params)
  return `${API_URL}${resource}${path ? '/' + path : ''}` + uriString
}
