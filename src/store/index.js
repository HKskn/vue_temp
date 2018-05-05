import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

let state = {
  isInitiated: false
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions: actions(Vue)
});
