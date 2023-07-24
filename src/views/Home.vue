<script setup>
  import {getBlogList} from "@/api/blog";
  import {onMounted,ref} from "vue";
  import {usePageTitle} from "@/hooks/usePageTitle";
  // 修改标题
  usePageTitle('首页');
  const blogList = ref([]);
  onMounted(
    async ()=>{
      const res = await getBlogList();
      console.log('res',res);
      blogList.value = res.data;
    }
  )
</script>

<template>
  <main>
    <h1>Home</h1>
  </main>
</template>
