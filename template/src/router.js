import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from './components/intro/Intro.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
    {
        path : '/',
        component : Intro,
    }
    ]
})
