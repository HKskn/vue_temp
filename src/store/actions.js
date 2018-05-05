export default function(Vue) {
    return {
        init({commit}) {
            return Vue.axios.get('/init').then(response => {
               // commit sth
            });
        }
    };
}
