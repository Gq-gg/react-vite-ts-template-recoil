import LazyLoading from "@components/LazyLoading/lazyLoading";
import { message } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthMiddleware = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log("执行 AuthMiddleware");
    const token = localStorage.getItem("token");
    setIsLogin(true);
    setTimeout(() => {
      if (token) {
        console.log("鉴权通过 AuthMiddleware");
        setIsLogin(true);
      } else {
        console.log("跳转登录页 AuthMiddleware");
        message.error("暂未登录，请登录");
        // 非管理员，跳转到登录页
        navigate("/");
      }
    }, 1000);
  }, []);
  return isLogin ? <Outlet /> : <LazyLoading />;
};

export default AuthMiddleware;
