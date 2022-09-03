import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import "../styles/nprogress.css";
import nProgress from "nprogress";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeComplete", nProgress.done);
  Router.events.on("routeChangeError", nProgress.done);

  return(
  <SessionProvider session={session} basePath="/api/auth" baseUrl="https://localhost:12345">
    <Component {...pageProps} />
  </SessionProvider>);
}

export default MyApp;
