import { defineStore } from 'pinia'
import http from '@/utils/http.ts'


export const useDashboardStore = defineStore({
  id: 'DashboardStore',
  state: () => ({
    dashboard: null,
  }),
  actions: {
    async getDashboard() {
      this.dashboard = null
      try {
        const response = await http.get('/dashboard')
        if (response.status === 200) {
          this.dashboard = response.data
        }
      } catch (err) {
        console.error(err)
      }
    },
  },
})