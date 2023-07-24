<template>
  <div class="navigation-menu">
    <el-menu
        v-model="activeMenu"
        :default-active="activeMenu"
        mode="horizontal"
        @select="handleMenuClick"
    >
      <el-menu-item index="frontend">前端</el-menu-item>
      <el-menu-item index="java">Java</el-menu-item>
      <el-menu-item index="python">Python</el-menu-item>
      <el-menu-item index="miniprogram">小程序</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const activeMenu = ref('');

const router = useRouter();

// 监听路由变化，根据 query 参数更新 activeMenu
watchEffect(() => {
  const category = router.currentRoute.value.query.category;
  activeMenu.value = category || '';
});

// 处理菜单点击事件，跳转到首页，并加上对应的 query 参数
const handleMenuClick = (index) => {
  const category = index === activeMenu.value ? '' : index;
  router.push({ path: '/', query: { category } });
};
</script>

<style>
.navigation-menu {
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  margin-left: 90px;
}

.el-menu-item {
  padding: 0 20px;
}

.el-menu-item:hover,
.el-menu-item.is-active {
  background-color: #f8f8f8;
}
</style>
