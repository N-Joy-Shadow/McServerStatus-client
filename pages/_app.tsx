import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import "../styles/nprogress.css"
import nProgress from 'nprogress'
function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart",nProgress.start)
  Router.events.on("routeChangeComplete",nProgress.done)
  Router.events.on("routeChangeError",nProgress.done)

  return <Component {...pageProps} />
}

export default MyApp
