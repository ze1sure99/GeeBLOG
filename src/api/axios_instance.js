// 导入 axios 库
import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/6f62e591038e5923c12911048feb5b87', // 设置基础URL，根据实际情况修改
    timeout: 10000, // 设置请求超时时间，单位：毫秒
});

// 请求拦截器，在发送请求之前做一些处理，例如加入请求头等
instance.interceptors.request.use(
    (config) => {
        // 在这里可以做一些处理，例如加入认证信息、请求头等
        return config;
    },
    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器，在接收响应数据之前做一些处理
instance.interceptors.response.use(
    (response) => {
        // 在这里可以对响应数据进行处理，例如处理错误码、数据转换等
        return response.data;
    },
    (error) => {
        // 处理响应错误
        return Promise.reject(error);
    }
);

// 封装 GET 请求
export function get(url, params) {
    return instance.get(url, { params });
}

// 封装 POST 请求
export function post(url, data) {
    return instance.post(url, data);
}

// 封装 PUT 请求
export function put(url, data) {
    return instance.put(url, data);
}

// 封装 DELETE 请求
export function del(url) {
    return instance.delete(url);
}


// 导出instance
export default instance;