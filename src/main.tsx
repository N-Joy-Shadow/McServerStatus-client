import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import { SnackbarProvider } from "notistack";
import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

import Main from "./pages/main";

import ServerPush from './pages/server/add';
import ServerEdit from './pages/server/edit';

import { McToast, ToastEnum } from './components/MCStyled/mcToast';
import DevEdit from './pages/server/dev_edit';
declare module "notistack" {
  interface VariantOverrides {
    Toast: {
      toastType: ToastEnum;
    };
  }
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Main/>}/>
      <Route path="server">
        <Route path="add" element={<ServerPush/>}/>
        <Route path="dev/:name" element={<DevEdit/>}/>
        <Route path="edit/:name" element={<ServerEdit/>}/>
      </Route>
    </Route>
  )
)

const Toast = { Toast : McToast }
const configuration : Configuration= {
  auth: { clientId: import.meta.env.VITE_AUTH_CLIENT_ID }
};

const pca = new PublicClientApplication(configuration);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <SnackbarProvider
        maxSnack={3}
        Components={Toast}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={2500}
      >
        <MsalProvider instance={pca}>
          <RouterProvider router={router}/>
        </MsalProvider>
      </SnackbarProvider>
    </CookiesProvider>
  </React.StrictMode>
);
