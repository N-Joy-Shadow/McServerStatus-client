import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import "../styles/nprogress.css";
import nProgress from "nprogress";
import { CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeComplete", nProgress.done);
  Router.events.on("routeChangeError", nProgress.done);
  return(
    <>
      <CookiesProvider>
      <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
