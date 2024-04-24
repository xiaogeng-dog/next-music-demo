import Request from "./request";

const request = new Request({
  baseURL: "http://codercba.com:9060/music-next/api",
  timeout: 60000,
  interceptor: {
    requestInterceptor(config) {
      // console.log('单例拦截，请求成功')
      return config;
    },
    requestInterceptorCatch(err) {
      // console.log('单例拦截，请求失败')
      return err;
    },
    responseInterceptor(res) {
      // console.log('单例拦截，响应成功')
      return res;
    },
    responseInterceptorCatch(err) {
      // console.log('单例拦截，响应失败')
      return err;
    },
  },
});

export default request;
