import Vue from 'vue'
import App from './App.vue'
import * as mdbvue from 'mdbvue'

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
