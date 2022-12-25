import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { CookiesProvider } from "react-cookie";
import React from "react";
import { SnackbarProvider } from "notistack";
import { McToast } from "../utils/components/MCStyled/mcToast";

declare module "notistack" {
  interface VariantOverrides {
    Toast: {
      title: string;
    };
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <SnackbarProvider
          maxSnack={3}
          Components={{
            Toast: McToast,
          }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
          autoHideDuration={4000}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
