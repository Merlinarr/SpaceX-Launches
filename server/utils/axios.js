const axios = require('axios');
const axiosRetry = require('axios-retry').default;


const baseURL = "https://api.spacexdata.com/v4"
const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use(
    (config) => {
        /* request interceptors logic here*/

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        /* response interceptors logic here*/
        return response;
    },
    async (error) => {
        /* error handler logic here*/
        return Promise.reject(error);
    },
);

axiosRetry(instance, { retries: 0, retryCondition: () => true });

module.exports = { axiosApi: instance };