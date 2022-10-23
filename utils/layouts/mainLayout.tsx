import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

import bg from "../../styles/mc/Background.module.css"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={bg.Mcbg}>
        <div className="main">
          <div className="w-full p-4">{children}</div>
        </div>
      </main>
      <Footer />
      <style jsx>
        {`
          .main {
            height: 86vh;
            width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
          }
        `}
      </style>
    </div>
  );
}
