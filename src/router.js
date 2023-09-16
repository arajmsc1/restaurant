import homeComp from './components/homeComp.vue'
import signupApp from './components/signupApp.vue'
import loginPage from './components/loginPage.vue'
import addRes from './components/addRes.vue'
import updateRes from './components/updateRes.vue'
import { createRouter,  createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'homeComp',
        component: homeComp,
        path: '/'
    },
    {
        name: 'signupApp',
        component: signupApp,
        path: '/Sign-up'
    },
    {
        name: 'loginPage',
        component: loginPage,
        path: '/login'
    },
    {
        name: 'addRes',
        component: addRes,
        path: '/add-res'
    },
    {
        name: 'updateRes',
        component: updateRes,
        path: '/update-res/:id'
    },

];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
