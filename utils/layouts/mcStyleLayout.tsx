import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
export default function MCstyledLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Head>
        <title>로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container-item">
        <div className="main">
          {children}
        </div>
      </main>
      <style jsx>
        {`
          .container-item {
            background-image: url('https://status.shwa.space/assets/images/dirt-light.png');
            background-repeat: repeat;
            background-size: 64px;
            font-size: large;
          }

          .main {
            height: 100vh;
            width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
          }
        `}
      </style>
    </div>
  );
}
