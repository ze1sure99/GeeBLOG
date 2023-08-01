<template>
  <div class="blog-card" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <!-- 上层 -->
    <div class="blog-card-header">
      <div class="author">
        <el-icon class="user-icon"><User/></el-icon>{{ blog.author }}
      </div>
      <div class="category">{{ blog.category }}</div>
      <div class="time">{{ formatDate(blog.createdAt) }}</div>
    </div>

    <!-- 中层 -->
    <div class="blog-card-content">
      <h2 class="title" @click="handleTitleClick">{{ blog.title }}</h2>
      <p class="summary">{{ blog.description }}</p>
    </div>

    <!-- 下层 -->
    <div class="blog-card-footer">
      <div class="likes">
        <el-icon class="likes-icon"><Pointer /></el-icon>{{ blog.likes }}
      </div>
      <div class="favorites">
        <el-icon class="favorites-icon"><Star /></el-icon>{{ blog.favorites }}
      </div>
      <div class="comments">
        <el-icon class="comments-icon"><Comment /></el-icon>{{ blog.comments }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {formatDate} from '@/utils/date';


// 用props 获取 blog
const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const isHovered = ref(false);

const handleTitleClick = () => {
  router.push(`/blog/${props.blog.id}`);
};

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseOut = () => {
  isHovered.value = false;
};
</script>

<style>
.blog-card {
  /* 整体布局样式 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px; /* 设置上下间隔为 20px */
}

/* 上层样式 */
.blog-card-header {
  display: flex;
  gap: 10px;
}
.user-icon,.favorites-icon,.comments-icon,.likes-icon{
  margin-right: 3px;
}

.author,
.category,
.time {
  display: flex;
  align-items: center;
}

/* 中层样式 */
.blog-card-content {
  margin-top: 10px;
}

.title {
  cursor: pointer;
}

/* 下层样式 */
.blog-card-footer {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.likes,
.favorites,
.comments {
  display: flex;
  align-items: center;
}

/* 悬停时背景色变成粉色 */
.blog-card:hover {
  background-color: #ffc0cb;
}
</style>

