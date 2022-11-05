import Head from "next/head";
import { ReactNode } from "react";
import { HeadProps } from "../../API/HeadProps";
import Footer from "../components/footer";
import NavBar from "../components/navbar";



export default function MCstyledLayout({ children, head }: { children: ReactNode, head?: HeadProps }) {
  let title = "로그인"

  if(head){
    title =  head.title ?? "로그인"
  }


  return (
    <div>
      <Head>
        <title>{title}</title>
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
