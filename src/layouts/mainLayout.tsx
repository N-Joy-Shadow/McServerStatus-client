import { ReactNode } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

import bg from "../styles/mc/Background.module.css";
import { Helmet } from "react-helmet";
import { Routes, Route } from 'react-router-dom';
import Info from '../pages/info/info';
import Main from '../pages/main';
import { McBackground } from "../components/MCStyled/mcStyle";

export default function MainLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <Helmet>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <McBackground darker className="h-[100vh] py-[60px]">
        <NavBar />
        <main className="overflow-x-auto overflow-y-auto relative">
            <div className="w-full py-4 overflow-x-hidden">{children}</div>
        </main>
        <Footer />
      </McBackground>
      
    </>
  );
}
