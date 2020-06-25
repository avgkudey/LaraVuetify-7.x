window.Vue = require('vue');
import router from './plugins/router';
import vuetify from './plugins/vuetify';

Vue.component('app-root', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    router,
    vuetify,
});