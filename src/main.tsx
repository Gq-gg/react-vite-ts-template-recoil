import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import { THEME_TOKEN } from "./data/theme.ts";
import App from "./App.tsx";

import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";

import "normalize.css"; // 在这里导入 normalize.css
import "./index.css";
dayjs.locale("zh-cn");
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          ...THEME_TOKEN,
        }}
        locale={zhCN}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
);
