import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosDefaultConfig = {
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: { "Content-Type": "application/json" },
};

const axiosClient = axios.create(axiosDefaultConfig);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error: AxiosError) {
    return Promise.reject(error.response?.data);
  }
);

const callApi = async <R>(options: AxiosRequestConfig) => {
  try {
    const response = await axiosClient<any, R>(options);
    return { response };
  } catch (err) {
    const error = err as R;
    return { error };
  }
};

export { axiosClient, callApi, axiosDefaultConfig };
