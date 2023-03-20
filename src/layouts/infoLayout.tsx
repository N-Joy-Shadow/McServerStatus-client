import React, { ReactNode } from "react";
import bg from "../styles/mc/Background.module.css";
import { IHelmet } from "../API/IHelmet";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { McBackground, McBackgroundLayout, McButton, McFooter, McNav } from "../components/MCStyled/mcStyle";

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
        <McNav>
          <div className="fixed w-full h-[60px] items-center flex  justify-between">
            <div className=" flex felx justify-start space-x-4 md:pl-4">
              {LinkList.map((x, i) => (
                  <Link to={`${x.href}`} key={i}>
                    <McButton className="md:w-48 w-24 my-4 textcenter h-10 ">{x.name}</McButton>
                  </Link>
              ))}
            </div>
            <div className="pr-4 md:flex hidden h-[40px]">
                <a href="mailto:njoyshadow@gmail.com">
                  <McButton className="w-10 h-full">
                    <EmailIcon />
                  </McButton>
                </a>
                <a href="https://github.com/N-Joy-Shadow/McServerStatus-client">
                <McButton className="w-10 h-full">
                  <GitHubIcon />
                </McButton>
                </a>
                <Link to="/login">
                  <McButton className="w-28 h-full">관리자</McButton>
                </Link>
            </div>
          </div>
        </McNav>
        <McBackgroundLayout>
          {children}
        </McBackgroundLayout>
        <McFooter className="w-full flex justify-end">
              <Link to="/">
                <McButton className=" h-10 w-48 mx-4 my-3">뒤로 가기</McButton>
              </Link>
        </McFooter>
      </>
    </>
  );
}
