/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_PORT: number;
  readonly VITE_DROP_CONSOLE: boolean;
  readonly VITE_BUILD_GZIP: boolean;
  readonly VITE_REPORT: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
