import axios from 'axios';

const baseUrl = '/api';

// 创建 Axios 实例并配置
const createAxiosInstance = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // 对响应数据做点什么
      return response;
    },
    (error) => {
      console.log(error, 'error');
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );

  return instance;
};

// 导出具有基本 URL 的 Axios 实例
const axiosInstance = createAxiosInstance(baseUrl);
export default axiosInstance;
