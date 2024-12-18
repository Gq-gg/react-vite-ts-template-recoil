import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
export default tseslint.config(
  {
    ignores: [
      "dist",
      "*.sh",
      "node_modules",
      "dist",
      "*.woff",
      "*.ttf",
      ".vscode",
      ".idea",
      ".husky",
      ".local",
      "/bin",
      "mock",
      ".eslintcache",
      ".stylelintcache",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-explicit-any": "off",
      // "prettier/prettier": "warn", // 让 eslint 提示 prettier 错误格式的级别 warn | error
      // "arrow-body-style": "off", // eslint-plugin-prettier 建议关闭，原因可查看文档说明
    },
  },
);
