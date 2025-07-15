import { message } from "antd";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import {parseAxiosError} from "@src/utils/errors-utils";



// ********************** //
// ********************** //
// ********************** //

// * Server API Instance
const axiosApiInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
    withCredentials: true,
});
const axiosPublicInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_PUBLIC_URL}`,
    withCredentials: true,
});

axiosApiInstance.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosApiInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => response,
    (error: AxiosError) => {
        if (error.status === 500) message.error("Erreur interne du serveur", 5000);
        return Promise.reject(parseAxiosError(error));
    }
);
// * Server Public Instance


axiosPublicInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosPublicInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => response,
  (error: AxiosError) => {
    if (error.status === 500) message.error("Erreur interne du serveur", 5000);
    return Promise.reject(parseAxiosError(error));
  }
);


export {  axiosPublicInstance,axiosApiInstance };
