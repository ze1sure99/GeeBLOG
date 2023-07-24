// 导入封装好的 axios 实例
import instance from "@/api/axios_instance";// 假设您的封装代码在 axiosWrapper.js 中

// 获取博客评论列表
export async function getBlogComments(blogId) {
    try {
        const response = await instance.get(`/api/blog/${blogId}/comments`);
        return response;
    } catch (error) {
        // 在此处处理错误
        throw new Error('获取博客评论列表失败'); // 或者返回其他合适的错误信息
    }
}

// 添加评论
export async function addComment(blogId, commentData) {
    try {
        const response = await instance.post(`/api/blog/${blogId}/comment`, commentData);
        return response;
    } catch (error) {
        // 在此处处理错误
        throw new Error('添加评论失败'); // 或者返回其他合适的错误信息
    }
}

// 删除评论
export async function deleteComment(blogId, commentId) {
    try {
        const response = await instance.delete(`/api/blog/${blogId}/comment/${commentId}`);
        return response;
    } catch (error) {
        // 在此处处理错误
        throw new Error('删除评论失败'); // 或者返回其他合适的错误信息
    }
}
