import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  console.log("触发 login layouts");
  return (
    <div>
      <div>这是 LoginLayout</div>
      <Outlet />
    </div>
  );
};

export default LoginLayout;
