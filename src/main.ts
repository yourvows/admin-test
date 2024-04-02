//@ts-ignore
import VueMask from '@devindex/vue-mask'
import App from './App.vue'
//@ts-ignore
import VueApexCharts  from "vue3-apexcharts"
import ApexCharts from 'apexcharts';
import { createApp } from 'vue'
import {createPinia} from "pinia";
import '@/assets/style/index.css'


import router from '@/router'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$apexcharts = ApexCharts;

app.use(VueMask)
app.use(VueApexCharts);
app.use(pinia)
app.use(router)

app.mount('#app')
