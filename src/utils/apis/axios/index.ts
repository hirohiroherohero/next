import axios, { AxiosRequestConfig } from 'axios';

const baseInstanceInfo: AxiosRequestConfig = {
  baseURL: '',
  headers: {
    //   Authorization: `Bearer `,
  },
  withCredentials: false,
};

const instance = axios.create(baseInstanceInfo);

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: unknown) => {
    return Promise.reject(error);
  },
);

export const axiosGet = (url: string) => {
  return instance.get(url);
};

export const axiosPost = (url: string, config: AxiosRequestConfig) => {
  return instance.post(url, config);
};

export const axiosPut = (url: string, config: AxiosRequestConfig) => {
  return instance.put(url, config);
};

export const axiosPatch = (url: string, config: AxiosRequestConfig) => {
  return instance.patch(url, config);
};
