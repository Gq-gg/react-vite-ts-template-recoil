import { message } from "antd";
import { InternalAxiosRequestConfig } from "axios";

export const handleChangeRequestHeader = (config: InternalAxiosRequestConfig<any>) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["X-Token"] = localStorage.getItem("token") || "";
  return config;
};

// export const handleConfigureAuth = (
//   config: InternalAxiosRequestConfig<any>,
// ) => {
//   config.headers['token'] = localStorage.getItem('token') || '';
//   return config;
// };
export const handleNetworkError = (errStatus?: number): void => {
  const networkErrMap: any = {
    400: "错误的请求", // token 失效
    401: "未授权，请重新登录",
    403: "拒绝访问",
    404: "请求错误，未找到该资源",
    405: "请求方法未允许",
    408: "请求超时",
    500: "服务器端出错",
    501: "网络未实现",
    502: "网络错误",
    503: "服务不可用",
    504: "网络超时",
    505: "http版本不支持该请求",
  };
  if (errStatus) {
    message.error(networkErrMap[errStatus] ?? `其他连接错误 --${errStatus}`);
    return;
  }

  message.error("无法连接到服务器！");
};

export const handleAuthError = (errno: number): boolean => {
  console.log("errStatus=========>>>>>>>>>>", errno);
  const authErrMap: any = {
    10031: "登录失效，需要重新登录", // token 失效
    10032: "您太久没登录，请重新登录~", // token 过期
    10033: "账户未绑定角色，请联系管理员绑定角色",
    10034: "该用户未注册，请联系管理员注册用户",
    10035: "code 无法获取对应第三方平台用户",
    10036: "该账户未关联员工，请联系管理员做关联",
    10037: "账号已无效",
    10038: "账号未找到",
  };

  if (authErrMap[errno] !== undefined) {
    message.error(authErrMap[errno]);
    // 授权错误，登出账户
    // logout();
    return false;
  }

  return true;
};

export const handleGeneralError = (errno: number, errmsg: string): boolean => {
  if (errno == 0) {
    message.error(errmsg);
    return false;
  }

  return true;
};
