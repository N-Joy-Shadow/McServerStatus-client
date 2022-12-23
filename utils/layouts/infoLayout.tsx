import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import bg from "../../styles/mc/Background.module.css";
import MCButton from "../components/MCStyled/mcButton";
import { HeadProps } from "../../API/HeadProps";

export default function InfoLayout({
  children,
  head,
}: {
  children: ReactNode;
  head: HeadProps;
}) {
  const LinkList = [
    {
      href: "/info",
      name: "공지",
    },
    {
      href: "/info/howto",
      name: "어떻게 씀?",
    },
    {
      href: "/info/docs",
      name: "API 문서",
    },
  ];

  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content="정보" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <nav className={bg.McBgNav}>
          <div className="fixed w-full flex felx justify-start h-[60px] items-center space-x-4 md:pl-4">
            {LinkList.map((x, i) => (
              <div className="w-48 my-4 textcenter h-10" key={i}>
                <Link href={`${x.href}`}>
                  <MCButton>{x.name}</MCButton>
                </Link>
              </div>
            ))}
          </div>
        </nav>
        <main className={bg.McMBg}>{children}</main>
        <footer className={bg.McBgFooter}>
            <div className="w-full flex justify-end">

          <div className="h-10 mx-4 my-3 w-48">
            <Link href="/">
              <MCButton>뒤로 가기</MCButton>
            </Link>
          </div>
            </div>
        </footer>
      </>
    </>
  );
}