import axios from "axios";
import {
  handleChangeRequestHeader,
  // handleConfigureAuth,
  // handleGeneralError,
  handleNetworkError,
} from "./tools";

type Fn = (data: FcResponse<any>) => unknown;

interface IAnyObj {
  [index: string]: unknown;
}

interface FcResponse<T> {
  code: number;
  message: string;
  data: T;
}
// 设置 axios 全局配置
axios.defaults.baseURL = import.meta.env.VITE_API_URL; // 设置基础 URL
axios.defaults.timeout = 20 * 1000; // 设置超时，单位毫秒
axios.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config);
  // config = handleConfigureAuth(config);
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    handleNetworkError(response.data.code);
    // handleGeneralError(response.data.code, response.data.message);
    return response;
  },
  (err) => {
    handleNetworkError(err?.code);
    Promise.reject(err);
  },
);

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn,
): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        resolve([null, res as FcResponse<T>]);
      })
      .catch((err) => {
        if (err) {
          // TODO:
        }
        resolve([err, undefined]);
      });
  });

export const Post = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {},
): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
