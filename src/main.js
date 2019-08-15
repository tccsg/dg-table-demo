import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import DGTable from 'dg-table'
import {
  DgDatePicker,
  DgCascader } from 'dg-table/lib/packages'
import 'element-ui/lib/theme-chalk/index.css'
import 'dg-table/lib/css/index.css'

Vue.use(ElementUI)
Vue.use(DGTable)
Vue.component(DgDatePicker.name, DgDatePicker)
Vue.component(DgCascader.name, DgCascader)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
