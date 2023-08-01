<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { getBlogList } from '@/api/blog';
import BlogCard from '@/components/BlogCard.vue';

// 获取路由对象
const route = useRoute();

// 定义列表和总数的ref
const blogList = ref([]);
const total = ref(0);

// 使用 watchEffect 监听url 参数 page pageSize category keyword 的变化 并获取博客列表和总数
watchEffect(() => {
  const { query } = route;
  console.log(route)
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 3;
  const category = query.category || '';
  const keyword = query.keyword || '';

  // 调用api方法获取博客列表和总数
  getBlogList({ page, pageSize, category, keyword })
      .then((res) => {
        console.log('res', res)
        blogList.value = res.data.list;
        total.value = res.data.total;
      })
      .catch((error) => {
        // 处理错误情况
        console.error('获取博客列表失败：', error);
      });
});
</script>

<template>
  <main>
    <div class="blog-container">
      <BlogCard v-for="blog in blogList" :key="blog.id" :blog="blog" />
    </div>
  </main>
</template>

<style scoped>
.blog-container {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 1rem;
}

</style>
