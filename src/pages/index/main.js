import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import {ipcRenderer} from '@/common.js'

Vue.config.productionTip = false;
Vue.prototype.$ipcRenderer = ipcRenderer;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
