/// <reference types="vite/client" />

// vite-env.d.ts

// 全局变量的声明
interface ImportMetaEnv {
    VITE_APP_TITLE: string;
    VITE_API_URL: string;
}
