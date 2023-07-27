<script setup>
import { useUserStore } from '@/stores/user';
import {RouterLink, useRouter} from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import {Close, Edit, Files} from "@element-plus/icons";
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
  // 清空用户信息
  userStore.clearUserinfo();
  // 清空token
  localStorage.removeItem('token');
  // 跳转到登录页面
  router.push('/login');
};
</script>

<template>
<!--  判断userinfo.username 如果有 显示nickname 如果没有登录 显示登录按钮-->
  <div class="dropdown" v-if="userinfo.username">
  <el-dropdown>
    <el-button type="primary">{{userinfo.username}}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goToCreateEditBlog"><el-icon><Edit/></el-icon>创建博客</el-dropdown-item>
        <el-dropdown-item @click="goToBlogManagement"><el-icon><Files/></el-icon>我的博客</el-dropdown-item>
        <el-dropdown-item @click="logout"><el-icon><Close/></el-icon>注销</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
  <RouterLink v-else to="/login"><el-button class="el-button--primary">登录</el-button></RouterLink>

</template>

<style scoped>
.nickname{
  color: #ff2da7;
}
</style>
