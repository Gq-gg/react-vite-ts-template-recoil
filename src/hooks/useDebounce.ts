import { useRef } from "react";

type IuseThrottle = (fn: (...args: any[]) => any, delay?: number, dep?: boolean) => any;

export const useDebounce: IuseThrottle = (func, wait = 400, immediate = false) => {
  const timeout = useRef<any>();
  const context = useRef<any>();
  const result = useRef<any>();

  function resDebounced(this: any, ...args: any[]) {
    context.current = this; // 使用 useRef 创建的引用

    if (timeout.current) clearTimeout(timeout.current);

    if (immediate) {
      const callNow = !timeout.current;
      timeout.current = setTimeout(function () {
        timeout.current = null;
      }, wait);
      if (callNow) result.current = func.apply(context.current, args); // 使用 useRef 创建的引用
    } else {
      timeout.current = setTimeout(function () {
        timeout.current = null;
        result.current = func.apply(context.current, args); // 使用 useRef 创建的引用
      }, wait);
    }
    return result.current; // 使用 useRef 创建的引用
  }

  resDebounced.cancal = function () {
    clearTimeout(timeout.current);
    timeout.current = null;
  };

  return resDebounced;
};
