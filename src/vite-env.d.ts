/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_GOOGLE_SECRET: string;
    VITE_GOOGLE_ID: string;
    VITE_MONGODB_URL: string;
    VITE_DISCORD_CLIENT_ID: string;
    VITE_DISCORD_CLIENT_SECRET: string;
    VITE_BASE_API_URL : string;
    VITE_BASE_AUTH_URL : string;
    VITE_BASE_HUB_URL : string;
    VITE_AUTH_CLIENT_ID : string;
    VITE_AUTH_REDIRECTURI : string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }