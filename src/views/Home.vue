<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { getBlogList } from '@/api/blog';
import BlogCard from '@/components/BlogCard.vue';
import Pagination from "@/components/Pagination.vue";

// 获取路由对象
const route = useRoute();

// 定义列表和总数的ref
const blogList = ref([]);
const total = ref(0); // 总条数
const  currentPage = ref(1); // 当前页码
const  pageSizeRef = ref(3); // 每页条数

// 使用 watchEffect 监听url 参数 page pageSize category keyword 的变化 并获取博客列表和总数
watchEffect(() => {
  currentPage.value = parseInt(route.query.page) || 1;
  pageSizeRef.value = parseInt(route.query.pageSize) || 3;
  const { page, pageSize, category, keyword } = route.query;
  getBlogList({ page, pageSize, category, keyword })
      .then((res) => {
        console.log(res)
        blogList.value = res;
        total.value = res.length;
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
    <div>
      <!-- 其他内容 -->
      <Pagination :total="total" :page="currentPage" :pageSize="pageSizeRef" />
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
