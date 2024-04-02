import VueMask from '@devindex/vue-mask'
import App from './App.vue'
import VueApexCharts  from "vue3-apexcharts"
import { createApp } from 'vue'
import {createPinia} from "pinia";
import '@/assets/style/index.css'


import router from '@/router'

const pinia = createPinia()
const app = createApp(App)


app.use(VueMask)
app.use(VueApexCharts);
app.use(pinia)
app.use(router)

app.mount('#app')
