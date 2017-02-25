// API environment vars
const API_BASE = ''

// Fetch headers + other config options
const getConfig = (method, body) => {
  let config = {
    method,
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  return config
}

// Parses the json body if available
const handleResponse = (response) => {
  if (response.ok && response.status === 200) {

    return response.text().then(text => {
      return text && JSON.parse(text)
    })
  }

  throw (response)
}

// Fetch wrapper for checking auth before making calls
const __fetch = (method, url, body) => {
  return fetch(API_BASE + url, getConfig(method, body)).then(handleResponse)
}

// HTTP methods
const Get = (url) => {
  return __fetch('GET', url)
}

const Post = (url, body = {}) => {
  return __fetch('POST', url, body)
}

const Put = (url, body = {}) => {
  return __fetch('PUT', url, body)
}

const Delete = (url) => {
  return __fetch('DELETE', url)
}

export { Get, Post, Put, Delete }
