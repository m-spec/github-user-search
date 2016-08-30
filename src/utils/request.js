import axios from 'axios'

const request = axios.create({
  baseUrl: 'http://api.randomuser.me'
})

export function get(...args) {
  return new Promise((resolve, reject) => {
    request.get(...args)
      .then(({ data }) => resolve(data))
      .catch(error => reject(error))
  })
}

export default request
