import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter);

const HomeRoute = {
    path: '/',
    name: 'home',
    component: Home
}

const HomeRedirectRoute = {
    path: '/home',
    name: 'homeredirect',
    component: Home
}

const AboutRoute = {
    path: '/about',
    name: 'about',
    component: About
}

const ContactRoute = {
    path: '/contact',
    name: 'contact',
    component: Contact
}

const routes = [HomeRoute, AboutRoute, ContactRoute, HomeRedirectRoute]

export default new VueRouter({
    routes: [
        ...routes
    ]
})