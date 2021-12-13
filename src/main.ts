import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi from '@vue/composition-api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '@/assets/scripts/fastclick'
import '@/assets/scripts/common.ts'
import '@/assets/styles/index.css'

Vue.use(VueCompositionApi)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
