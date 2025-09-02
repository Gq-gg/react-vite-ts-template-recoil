import axios from "axios";
import { handleChangeRequestHeader, handleGeneralError, handleNetworkError } from "./tools";

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
    // ✅ 正确检查2xx状态码
    if (response.status < 200 || response.status >= 300) {
      handleNetworkError(response.status); // 处理HTTP错误
      return Promise.reject(response);
    }

    // ✅ 处理业务层错误（假设code=0表示成功）
    if (response.data.code && response.data?.code !== 200) {
      handleGeneralError(response.data.code, response.data.message);
      return Promise.reject(response.data);
    }

    return response;
  },
  (err) => {
    handleNetworkError(err?.status);
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
  data: unknown,
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
export const PostOnData = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {},
): Promise<[any, T | undefined]> => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data]); // 直接返回 data 中的值
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
