import {defineStore} from "pinia";
import http from "@/utils/http.ts";
import Cookies from 'js-cookie'

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
    async login(params: ILoginData) {
      try {
        const res = await http.post('/auth/login/', params)
        this.token = res?.data?.refresh
        Cookies.set('token', res?.data?.refresh, { expires: 7 })
        this.loginError = null
      } catch (error) {
        console.log(error)
        this.loginError = 'Username yoki password xato!'
      }
    },
  },
})