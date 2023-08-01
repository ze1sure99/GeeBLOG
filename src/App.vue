<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <div class="top-nav">
      <div class="left-nav">
        <!-- Logo 图标 -->
        <div class="logo">
          <Router-link to="/"><h1>GeeBLOG</h1></Router-link>
        </div>
        <!-- 导航菜单 -->
        <NavigationMenu class="nav_menu"/>
        <!-- 搜索组件 -->
        <SearchInput class="search_input"/>
      </div>

      <div class="right-nav">
        <!-- 登录链接 -->
       <UserInfo></UserInfo>
      </div>
    </div>

    <!-- 主体部分 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from "@/views/NavigationMenu.vue";
import SearchInput from "@/views/SearchInput.vue";
import UserInfo from "@/views/UserInfo.vue";
import { getUserInfo } from "@/api/user";
import { useUserStore } from "@/stores/user";
import { ref, onMounted } from 'vue';

// 获取用户信息
const userStore = useUserStore();
const userinfo = ref(null);

onMounted(async () => {
  try {
    const res = await getUserInfo();
    userinfo.value = res.data;
    userStore.setUserinfo(res.data); // 设置用户信息 保存到 vuex 里面 以便全局使用
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
});
</script>
<style>
.app {
  font-family: Arial, sans-serif;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  background-color: #ffffff;
  border-bottom: 2px solid var(--el-menu-text-color);
}

.left-nav {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}

.nav_menu{
  border-bottom: none;
}

.logo a{
  text-decoration: none;
}

.right-nav a {
  color: #333;
  text-decoration: none;
}

.main {
  padding: 20px;
}
</style>
