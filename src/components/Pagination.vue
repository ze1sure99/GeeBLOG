<template>
  <div class="pagination">
    <el-pagination
        :total="total"
        :page-size="pageSize"
        v-model:current-page="currentPage"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

// 接收外部传入的参数
defineProps(['total', 'pageSize']);

// 创建响应式的currentPage变量
const currentPage = ref(1);

// 获取路由对象
const router = useRouter();

// 处理分页切换，响应关键字、分类和页码的路由变化
const handleCurrentChange = (page) => {
  const { query } = router.currentRoute.value;
  const { keywords, category } = query;

  // 使用 router.push 方法更新 URL 中的查询参数，并设置currentPage的值
  router.push({
    query: {
      ...query,
      page,
    },
  });
  currentPage.value = page; // 手动更新currentPage的值

  // 在此处根据关键字和分类参数获取博客列表等操作
  // 可以调用自己定义的方法来获取博客列表，例如：getBlogList(keywords, category, page, pageSize)
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
