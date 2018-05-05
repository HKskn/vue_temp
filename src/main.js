// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import mixin from './mixin';
import filters from './filters';
import {EventBus} from './EventBus';
import api from './api';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;

Vue.use(VueAxios, api);
Vue.mixin(mixin);
for (let key in filters) {
  Vue.filter(key, filters[key]);
}
Vue.prototype.$eventHub = EventBus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
