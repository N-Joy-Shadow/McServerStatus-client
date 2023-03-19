import React, { ReactNode } from "react";
import bg from "../styles/mc/Background.module.css";
import MCButton from "../components/MCStyled/mcButton";
import { IHelmet } from "../API/IHelmet";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function InfoLayout({
  children,
  helmet,
}: {
  children: ReactNode;
  helmet: IHelmet;
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
      <Helmet>
        <title>{helmet.title}</title>
        <meta name="description" content="정보" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <>
        <nav className={bg.McBgNav}>
          <div className="fixed w-full h-[60px] items-center flex  justify-between">
            <div className=" flex felx justify-start space-x-4 md:pl-4">
              {LinkList.map((x, i) => (
                <div className="md:w-48 w-24 my-4 textcenter h-10" key={i}>
                  <Link to={`${x.href}`}>
                    <MCButton>{x.name}</MCButton>
                  </Link>
                </div>
              ))}
            </div>
            <div className="pr-4 md:flex hidden h-[40px]">
              <div className="w-10 h-full">
                <a href="mailto:njoyshadow@gmail.com">
                  <MCButton>
                    <EmailIcon />
                  </MCButton>
                </a>
              </div>
              <div className="w-10 h-full">
                <a href="https://github.com/N-Joy-Shadow/McServerStatus-client">
                <MCButton>
                  <GitHubIcon />
                </MCButton>
                </a>
              </div>
              <div className="w-28 h-full">
                <Link to="/login">
                  <MCButton>관리자</MCButton>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className={bg.McMBg}>{children}</main>
        <footer className={bg.McBgFooter}>
          <div className="w-full flex justify-end">
            <div className="h-10 mx-4 my-3 w-48">
              <Link to="/">
                <MCButton>뒤로 가기</MCButton>
              </Link>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}
