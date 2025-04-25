# React + TypeScript + Vite 项目模板

🚀 **开箱即用的企业级前端开发模板**  
- 基于 `Vite` 构建，集成 `React 18` + `TypeScript`
- 状态管理：`Jotai`
- 代码规范：`ESLint` + `Prettier` + `Stylelint` + `Commitlint`

## ✨ 核心优势
✅ **标准化**：内置 Git 提交规范、代码风格检查和自动化格式化  
✅ **高效开发**：完善的 `axios` 封装、路由配置和全局状态管理  
✅ **极简启动**：避免重复搭建，专注业务逻辑开发  

## 🛠 技术栈
| 类别         | 技术/工具                       |
| ------------ | ------------------------------- |
| 核心框架     | React 18 + TypeScript           |
| 构建工具     | Vite                            |
| 状态管理     | Jotai                           |
| 路由         | react-router-dom v6             |
| HTTP 客户端  | axios（已封装全局拦截器）       |
| CSS 预处理器 | Less                            |
| 代码规范     | ESLint + Prettier + Stylelint   |
| Git 规范     | Commitlint + Husky + Commitizen |

## ⚡ 快速开始

### 环境要求
- Node.js `>=18.x`
- pnpm `>=8.x`

### 1. 克隆项目
```bash
git clone https://github.com/Gq-gg/react-vite-ts-template-recoil.git
cd react-vite-ts-template-recoil

2. 安装项目
pnpm install

3. 配置环境变量
# 复制环境变量示例文件
cp .env.example .env
cp .env.example .env.development
cp .env.example .env.production

4. 启动开发服务器
pnpm run dev

5. 生产环境构建：
pnpm run build
pnpm run preview

项目结构
src/
├── services/          # API请求封装
├── assets/            # 静态资源
├── components/        # 公共组件
├── pages/             # 页面组件
├── routes/            # 路由配置
├── stores/            # 状态管理
├── styles/            # 全局样式
├── utils/             # 工具函数
├── App.tsx            # 根组件
└── main.tsx           # 应用入口
