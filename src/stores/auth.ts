import {defineStore} from "pinia";
import http from "@/utils/http.ts";

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    loginError: '',
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(params: ILoginData) {
      try {
        const {data} = await http.post('/auth/login/', params)
        console.log(data)
        this.token = data.access
        this.loginError = ''
      } catch (error) {
        console.log(error)
        this.loginError = 'Username yoki password xato!'
      }
    },
    logout() {
      this.token = ''
    },
  },
})