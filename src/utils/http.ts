import axios from 'axios'
import Cookies from 'js-cookie'

const baseURL = import.meta.env.VITE_API_URL

const axiosIns = axios.create({
  baseURL,
})

axiosIns.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token')

    if (token) config.headers.Authorization = token ? `Bearer ${token}` : ''

    return config
  },
  (error) => Promise.reject(error),
)

axiosIns.interceptors.response.use(
  (response) => {
    if (response?.data?.refresh) {
      Cookies.set('token', response?.data?.refresh, { expires: 7 })
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove('token')
      window.location.href = '/login'
    }
  }
);

export default axiosIns