// 导入封装好的 axios 实例
import instance from "@/api/axios_instance"; // 假设您的封装代码在 axiosWrapper.js 中

// 用户注册
export async function registerUser(userData) {
    try {
        const response = await instance.post('/api/user/register', userData);
        return response;
    } catch (error) {
        // 在此处处理错误
        throw new Error('用户注册失败'); // 或者返回其他合适的错误信息
    }
}

// 用户登录
export async function loginUser(userData) {
    try {
        const response = await instance.post('/api/users/login', userData);
        return response;
    } catch (error) {
        // 在此处处理错误
        throw new Error('用户登录失败'); // 或者返回其他合适的错误信息
    }
}

// 获取用户信息
export async function getUserInfo() {
    try {
        const response = await instance.get('/api/users/me');
        return response;
    } catch (error) {
        // 在此处处理错误
        throw new Error('获取用户信息失败'); // 或者返回其他合适的错误信息
    }
}


