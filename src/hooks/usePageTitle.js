import { ref, onMounted, onUnmounted } from 'vue';

const NAME='GeeBLOG';
export function usePageTitle(title) {
    const originalTitle = ref(document.title);

    // 在组件挂载时，设置网页标题为指定的标题
    onMounted(() => {
        document.title = title+'-'+NAME;
    });

    // 在组件卸载时，恢复原始的网页标题
    onUnmounted(() => {
        document.title = originalTitle.value;
    });
}

// 导出这个函数
// export default usePageTitle;