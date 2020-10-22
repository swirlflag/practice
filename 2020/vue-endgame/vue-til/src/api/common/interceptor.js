import store from '@/store/index.js';

export const setInterceptors = (instance) => {

    instance.interceptors.request.use(
        (config) => {
            config.headers.Authorization = store.state.token;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    return instance;

};