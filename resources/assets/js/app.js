
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from 'vue-router'
import router from './routers'
import store from './store/index'
import jwtToken from './helpers/jwt'
import App from './components/App'

import zh_CN from './locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

Validator.localize('zh_CN', zh_CN);

axios.interceptors.request.use(function (config) {
    if(jwtToken.getToken()){
        config.headers['Authorization'] = 'Bearer ' + jwtToken.getToken();
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


Vue.use(VeeValidate,{
    locale: 'zh_CN'
});
Vue.use(VueRouter)

Vue.component('app',App)

const app = new Vue({
    el: '#app',
    router,
    store
});
