import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import FirstPage from '@/views/FirstPage';

Vue.use(Router);

let routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: FirstPage
  }
];

let router = new Router({
  routes
});


router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token');
    // Unauthenticated users can only access the login page.
    if (to.fullPath !== '/login') {
        if (!token) {
            return next('/login');
        } else {
            return fetchInitialData(store).then(() => {
              store.state.isInitiated = true;
              return next();
            });
        }
    } else {
        return next();
    }
});

// Fetch initial data and store to use in components
function fetchInitialData(store) {
    return new Promise((resolve, reject) => {
        if (store.state.isInitiated) {
            resolve();
        } else {
            store
              .dispatch('init')
              .then(resolve)
              .catch(reject);
        }
    });
}

export default router;
