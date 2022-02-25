import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;

//Importando, globalmente, o ficheiro CSS do Bootstrap.
import 'bootstrap/dist/css/bootstrap.css'

//Importando, globalmente, um componente
Vue.component('logout-component', () => import('./views/users/logout.vue'))

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
