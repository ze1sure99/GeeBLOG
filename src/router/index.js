import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import BlogDetail from '../views/BlogDetail.vue';
import UserManagement from '../views/UserManagement.vue';
import BlogManagement from '../views/BlogManagement.vue';
import CreateEditBlog from '../views/CreateEditBlog.vue';
import Login from '../views/Login.vue';
import Regist  from "@/views/Regist.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail,
  },
  {
    path: '/user',
    name: 'UserManagement',
    component: UserManagement,
  },
  {
    path: '/blog-management',
    name: 'BlogManagement',
    component: BlogManagement,
  },
  {
    path: '/create-edit-blog/:id?',
    name: 'CreateEditBlog',
    component: CreateEditBlog,
  },{
    path: '/Login',
    name: 'Login',
    component:Login
  },
  {
    path: '/Regist',
    name: 'Regist',
    component:Regist
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

