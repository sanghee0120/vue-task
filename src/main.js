import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from "v-calendar";
import '/src/css/style.css'

// eslint-disable-next-line
/* eslint-disable */
Vue.config.productionTip = false

Vue.use(VCalendar);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
