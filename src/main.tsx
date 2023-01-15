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

import Main from "../pages/main";
import Info from "../pages/info/info";
import Howto from "../pages/info/howto";
import Docs from "../pages/info/docs";
import ServerPush from '../pages/server/add';
import ServerEdit from '../pages/server/edit';
import DevPush from '../pages/server/dev_add';

import { McToast, ToastEnum } from '../components/MCStyled/mcToast';
import Login from '../pages/admin/login';
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
        <Route path="dev" element={<DevPush/>}/>
        <Route path="edit/:name" element={<ServerEdit/>}/>
      </Route>
      <Route path="info">
        <Route index element={<Info/>}/>
        <Route path="docs" element={<Docs/>}/>
        <Route path="howto" element={<Howto/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <SnackbarProvider
        maxSnack={3}
        Components={
          {
            Toast: McToast,
          }
        }
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={2500}
      >
{/*         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/info/docs" element={<Docs />} />
            <Route path="/info/howto" element={<Howto />} />
          </Routes>
        </BrowserRouter> */}
        <RouterProvider router={router}/>
      </SnackbarProvider>
    </CookiesProvider>
  </React.StrictMode>
);
