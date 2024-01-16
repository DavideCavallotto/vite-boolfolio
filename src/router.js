import { createRouter, createWebHistory } from "vue-router";

import Homepage from './views/Homepage.vue';
import ProjectIndex from './views/projects/index.vue';
import ProjectShow from './views/projects/show.vue';
import Contacts from './views/contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/portfolio',
            name: 'projects.index',
            component: ProjectIndex, 
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contacts, 
        },
        {
            path: '/portfolio/:slug',
            name: 'projects.show',            
            component: ProjectShow, 
        },
    ]
})

export { router }