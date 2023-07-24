// 导入封装好的 axios 实例
import  instance  from './axios_instance';

// 获取博客列表
export async function getBlogList() {
    return instance.get('/api/blogs');
}

// 获取博客详情
export  async function getBlogDetail(blogId) {
    return instance.get(`/api/blog/${blogId}`);
}

// 创建新的博客
export async function createBlog(blogData) {
    return instance.post('/api/blog/create', blogData);
}

// 编辑已有的博客
export async function editBlog(blogId, blogData) {
    return instance.put(`/api/blog/${blogId}/edit`, blogData);
}

// 删除博客
export async function deleteBlog(blogId) {
    return instance.delete(`/api/blog/${blogId}/delete`);
}

// 点赞博客
export async function likeBlog(blogId) {
    return instance.post(`/api/blog/${blogId}/like`);
}

// 取消点赞博客
export async function unlikeBlog(blogId) {
    return instance.post(`/api/blog/${blogId}/unlike`);
}

// 收藏博客
export async function collectBlog(blogId) {
    return instance.post(`/api/blog/${blogId}/collect`);
}

// 取消收藏博客
export async function uncollectBlog(blogId) {
    return instance.post(`/api/blog/${blogId}/uncollect`);
}

// 导出所有接口
// export default {
//     getBlogList,
//     getBlogDetail,
//     createBlog,
//     editBlog,
//     deleteBlog,
//     likeBlog,
//     unlikeBlog,
//     collectBlog,
//     uncollectBlog,
// }
