import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Addpost from '../views/Addpost.vue';
import Post from '../views/Post.vue';
import EditPost from '../views/EditPost.vue';
import SignUp from '../views/SignUp';
import LogIn from '../views/LogIn';
import AdoptCat from '../views/AdoptCat';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-post',
    name: 'addpost',
    component: Addpost, 
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post, 
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost, 
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/adopt-cat',
    name: 'adopt-cat',
    component: AdoptCat
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
