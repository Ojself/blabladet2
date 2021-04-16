import axios from 'axios'

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : `http://${window.location.hostname}:5000/api`,

  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,
// rename this
  getCountries() {
    return service
      .get('/')
      .then(res => res.data)
      .catch(errHandler)
  },

  addCountry(body) {
    return service
      .post('/', body)
      .then(res => res.data)
      .catch(errHandler)
  },
}
