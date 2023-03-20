import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { IHelmet } from "../API/IHelmet";

import bg from "../styles/mc/Background.module.css";
import {
  McBackground,
  McButton,
  McFooter,
  McNav,
} from "../components/MCStyled/mcStyle";

interface IDefaultLayoutProps {
  children: ReactNode;
  helmet: IHelmet;
  title: string;
}

export default function DefualtLayout({
  children,
  helmet,
  title,
}: IDefaultLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{helmet.title}</title>
        <meta name="description" content="정보" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <McNav>
        <p className="w-full flex justify-center text-xl">{title}</p>
      </McNav>

      <main>
        <McBackground darker className="h-[100vh] py-[60px]">
          {children}
        </McBackground>
      </main>

      <McFooter className="w-full flex justify-end">
        <Link to="/">
          <McButton className="h-10 mx-4 my-3 w-48">뒤로 가기</McButton>
        </Link>
      </McFooter>
    </>
  );
}
