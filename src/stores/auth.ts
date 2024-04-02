import {defineStore} from "pinia";
import http from "@/utils/http.ts";
import Cookies from 'js-cookie'
import { ILoginData } from '@/types/auth'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    loginError: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    login(params: ILoginData) {
      return new Promise((resolve, reject) => {
        http.post('/auth/login/', params)
          .then((response) => {
            this.token = response?.data?.refresh
            Cookies.set('token', response?.data?.refresh)
            resolve(response?.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  }
})