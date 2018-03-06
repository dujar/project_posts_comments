import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Authorization':  'anything i want'
  }
})


export default axiosInstance
