require('./bootstrap');
window.Vue = require('vue').default;

import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes } from "./routes.js";
import Vue from 'vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    routes : routes,
    mode : 'history'
})

const app = new Vue({
    el: '#app',
    router : router,
    render : h => h(App)
});
