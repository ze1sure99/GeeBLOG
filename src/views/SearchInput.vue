<template>
  <div class="search-input">
    <el-input
        v-model="keyword"
        placeholder="请输入搜索内容"
        @keyup.enter="handleSearch"
    ></el-input>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const keyword = ref('');
const route = useRoute();
const router = useRouter();

// 实时监听 URL 中的 query 参数 'keyword'，并将内容显示在输入框中
watch(
    () => route.query.keyword,
    (newKeyword) => {
      keyword.value = newKeyword || '';
    }
);

// 处理搜索事件，跳转到当前路径，并加上 query 参数 'keyword'
const handleSearch = () => {
  const query = { ...route.query };
  query.keyword = keyword.value.trim();
  router.push({ path: route.path, query });
};
</script>

<style>
.search-input {
  padding: 10px;
}
</style>
