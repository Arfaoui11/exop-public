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
// * Server Public Instance
const axiosPublicInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL_LOCAL}`,
});

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


export {  axiosPublicInstance };
