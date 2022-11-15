import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

import bg from "../../styles/mc/Background.module.css";

export default function MainLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={bg.McMBg}>
        <NavBar />
        <main className={bg.McMain}>
            <div className="w-full py-4 overflow-x-hidden">{children}</div>
        </main>
        <Footer />
      </div>
      
    </>
  );
}
