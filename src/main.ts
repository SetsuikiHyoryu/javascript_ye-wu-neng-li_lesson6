import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi from '@vue/composition-api'
import '@/assets/scripts/fastclick'
import '@/assets/scripts/common.js'
import '@/assets/styles/index.css'

Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
