import Head from "next/head";
import { ReactNode } from "react";
import { HeadProps } from "../../API/HeadProps";
import bg from "../../styles/mc/Background.module.css"


export default function MCstyledLayout({ children, head }: { children: ReactNode, head?: HeadProps }) {
  let title = "로그인"

  if(head){
    title =  head.title ?? "로그인"
  }


  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          {children}
      </main>

    </>
  );
}
