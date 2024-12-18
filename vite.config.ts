import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { compression } from "vite-plugin-compression2";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  return {
    plugins: [
      react(),
      viteEnv.VITE_REPORT && visualizer(), // 体积分析
      viteEnv.VITE_BUILD_GZIP && compression({ threshold: 1025 }), // 大于 1kb 压缩
    ],
    //引入文件别名 这里设置了 还需要在tsconfig.app.json 配置类型，不然引用会红色警告
    //还需要提前下载types/node 依赖
    resolve: {
      alias: {
        "@pages": path.resolve(__dirname, "src/", "pages"),
        "@components": path.resolve(__dirname, "src/", "components"),
        "@stores": path.resolve(__dirname, "src/", "stores"),
        "@services": path.resolve(__dirname, "src/", "services"),
        "@utils": path.resolve(__dirname, "src/", "utils"),
      },
    },
    // proxy 代理
    server: {
      port: viteEnv.VITE_PORT,
      cors: true,
      proxy: {
        [viteEnv.VITE_API_BASE_URL]: {
          target: viteEnv.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/devapi/, ""),
        },
      },
    },
    build: {
      outDir: "dist",
      // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
      minify: "esbuild",
      // minify: "terser",
      terserOptions: {
        compress: {
          drop_console: viteEnv.VITE_DROP_CONSOLE,
          drop_debugger: true,
        },
      },
    },
    // server: {
    //   host: "0.0.0.0", // 允许外部访问，适合 Docker 等环境
    //   port: 8800, // 设置端口
    //   open: true, // 启动后自动打开浏览器
    //   strictPort: true, // 在端口被占用时不自动使用其他端口
    //   // proxy: {
    //   //   '/XXX': {
    //   //     target: 'https://XXX',
    //   //     changeOrigin: true,
    //   //     cookieDomainRewrite: '',
    //   //     secure: false,
    //   //   },
    //   // },
    // },
  };
});
/** 对获取的环境变量做类型转换 */
function wrapperEnv(envConf: Record<string, string>) {
  const ret: Record<string, any> = {};
  for (const envName of Object.keys(envConf)) {
    let realName: any = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") realName = Number(realName);

    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}
