import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { CookiesProvider } from "react-cookie";
import React from "react";
import { SnackbarProvider } from "notistack";
function MyApp({ Component, pageProps }: AppProps) {

  return(
    <>
      <SnackbarProvider maxSnack={3} Components={{}} >
      <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
