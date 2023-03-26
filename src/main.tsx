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
import Info from "./pages/info/info";
import Howto from "./pages/info/howto";
import Docs from "./pages/info/docs";
import ServerPush from './pages/server/add';
import ServerEdit from './pages/server/edit';

import { McToast, ToastEnum } from './components/MCStyled/mcToast';
import Login from './pages/login/index';
import DevEdit from './pages/server/dev_edit';
import { msalConfig } from "./utils/auth/authcfg";
import Auth from './pages/login/auth';
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
      <Route path="info">
        <Route index element={<Info/>}/>
        <Route path="docs" element={<Docs/>}/>
        <Route path="howto" element={<Howto/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="auth" element={<Auth/>}
      loader={async ({ request ,params }) => {
          return params
      }}/>
    </Route>
  )
)

const Toast = { Toast : McToast }

const pca = new PublicClientApplication(msalConfig);


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
