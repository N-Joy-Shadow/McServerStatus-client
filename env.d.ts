
export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_SECRET: string;
      GOOGLE_ID: string;
      MONGODB_URL: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      BASE_API_URL : string;
      BASE_AUTH_URL : string;
    }
  }
}
