import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DataProcess from '@/components/DataProcess/DataProcess'
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/DataProcess',
            name: 'DataProcess',
            component: DataProcess
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        }
    ]
})