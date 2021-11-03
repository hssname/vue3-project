import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import config from "./config";
import {ElLoading, ElMessage,} from 'element-plus'

let loading: any;
let requestCount = 0
/* 显示loading */
const showLoading = () =>{
    if(!requestCount && !loading){
        loading = ElLoading.service({
            text: 'loading',
            background: 'rgba(0,0,0,0.7)',
            spinner: 'el-icon-loading'
        })
    }
    requestCount++
}

/* 隐藏loading */
const hideLoading = () =>{
    requestCount--
    if(!requestCount){
        loading.close()
    }
}


const instance = axios.create({
    baseURL: config.baseURL,
    timeout: 20000,
    headers: {
        cType: 'PC',
        appName: 'ghodr',
        'Content-Type': 'application/json'
    }
});
/* 请求失败后的错误统一处理 */
function errorHandle (response:any){
    const { status,code, message } = response;
    if(status){
        // 跳转至 404
    }
    return ElMessage.error(message || '9999-服务器内部异常/网络异常！')
}
// 请求拦截
instance.interceptors.request.use((config:AxiosRequestConfig) =>{
        showLoading()
    // 可在这里做一些数据的校验。
    // session的校验等。
        return config
    },
    (error: AxiosError) => {
        return error
    }
)

// 响应拦截
axios.interceptors.response.use((result:AxiosResponse) =>{
    hideLoading()
    if (result.data.code !== 1000) {
        errorHandle(result.data);
        return Promise.reject(new Error('获取数据错误'));
    }
       return result.data;
    },(e:AxiosError) =>{
       errorHandle(e.response);
       return Promise.reject(new Error('获取数据错误'));
    }
)
export default instance;
