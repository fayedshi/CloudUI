//import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dept from '@/components/Dept.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dept',
    name: 'Dept',
    component: Dept
  }
];

const myRouter = createRouter({
 history: createWebHistory(),
 routes
})

export default myRouter;
