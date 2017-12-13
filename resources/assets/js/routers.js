import VueRouter from 'vue-router'
import store from './store/index'
import jwtToken from './helpers/jwt'

let routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/pages/Home'),
        meta: {}
    },
    {
        path: '/about',
        component: require('./components/pages/About'),
        meta: {}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('./components/posts/Post'),
        meta: {}
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/register/Register'),
        meta: { requiresGuest: true }
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email'),
        meta: {}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta: { requiresGuest: true }
    },
    {
        path: '/profile',
        component: require('./components/user/ProfileWrapper'),
        children: [
            {
                path: '',
                name: 'profile',
                component: require('./components/user/Profile.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/edit-profile',
                name: 'profile.editProfile',
                component: require('./components/user/EditProfile.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/edit-password',
                name: 'profile.editPassword',
                component: require('./components/password/EditPassword.vue'),
                meta: { requiresAuth: true }
            }
        ],
        meta: { requiresAuth: true }
    },
    {
        path: '/test',
        name: 'narbar',
        component: require('./components/test/navbar.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
        if(store.state.AuthUser.authenticated || jwtToken.getToken()){
            return next()
        } else {
            return next({'name': 'login'})
        }
    }
    if(to.meta.requiresGuest){
        if(store.state.AuthUser.authenticated || jwtToken.getToken()){
            return next({'name': 'home'})
        } else {
            return next()
        }
    }
    return next();
});

export default router;
