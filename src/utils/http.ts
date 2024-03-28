import axios from 'axios'
import router from '@/router'


const baseURL = import.meta.env.VITE_API_URL

const axiosIns = axios.create({
  baseURL,
})

axiosIns.interceptors.request.use(
  (config) => {
    const token = document.cookie.split(';').find((cookie) => cookie.includes('token'))?.split('=')[1] || null

    if (token) config.headers.Authorization = token ? `Bearer ${token}` : ''

    return config
  },
  (error) => Promise.reject(error),
)

axiosIns.interceptors.response.use(
  (response) => {
    if (response.data && response.data.refresh) {
      document.cookie = `refresh=${response.data.refresh}; path=/`;
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      router.push({name: 'login'})
    }
  }
);

export default axiosIns