<script setup>
import { useUserStore } from '@/stores/user';
import {RouterLink, useRouter} from 'vue-router'

const router = useRouter();
const userStore = useUserStore();
const userinfo = userStore.userinfo;

// 点击跳转到创建博客页面
const goToCreateEditBlog = () => {
  router.push('/createEditBlog');
};

// 点击跳转到我的博客管理页面
const goToBlogManagement = () => {
  router.push('/BlogManagement');
};

// 点击执行注销操作的函数
const logout = () => {
  // TODO: 在这里执行注销逻辑
};
</script>

<template>
<!--  判断userinfo.username 如果有 显示nickname 如果没有登录 显示登录按钮-->
  <div class="userinfo">
    <div class="userinfo&#45;&#45;login">
      <div v-if="userinfo.username ">
        <el-dropdown trigger="click">
          <span class="nickname">{{userinfo.username}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click="goToCreateEditBlog">创建博客</el-dropdown-item>
            <el-dropdown-item @click="goToBlogManagement">我的博客</el-dropdown-item>
            <el-dropdown-item @click="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <RouterLink v-else to="/Login">
        <el-button class="el-button&#45;&#45;primary" >登录</el-button>
      </RouterLink>
    </div>
  </div>


</template>

<style scoped>
.nickname{
  color: #ff2da7;
}
</style>
