import axios from 'axios'

const baseUrl = 'https://dummyapi.io/data/v1/'

axios.interceptors.request.use(
    (config) => {
        config.headers['app-id'] = '61148597089c64bddb565e8e'
        return config
    }
)

const get = (endpoint) => axios.get(`${baseUrl}${endpoint}`) 
const post = (endpoint, body) => axios.post(`${baseUrl}${endpoint}`, body) 
const put = (endpoint, body) => axios.put(`${baseUrl}${endpoint}`, body) 
const destroy = (endpoint, body) => axios.delete(`${baseUrl}${endpoint}`, body) 

export { get, post, put, destroy }
