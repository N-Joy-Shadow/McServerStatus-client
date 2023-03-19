import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { IHelmet } from '../API/IHelmet';

import bg from "../styles/mc/Background.module.css";
import MCButton from '../components/MCStyled/mcButton';


interface IDefaultLayoutProps { 
    children : ReactNode,
    helmet : IHelmet,
    title : string 
}


export default function DefualtLayout({children, helmet,title} : IDefaultLayoutProps) {
    return(<>
        <Helmet>
            <title>{helmet.title}</title>
            <meta name="description" content="정보" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <>
            <nav className={bg.McBgNav}>
                <p className="w-full flex justify-center text-xl">{title}</p>
            </nav>
            <main className={bg.McMBg}>{children}</main>
        </>
        <footer className={bg.McBgFooter}>
            <div className="w-full flex justify-end">

          <div className="h-10 mx-4 my-3 w-48">
            <Link to="/">
              <MCButton>뒤로 가기</MCButton>
            </Link>
          </div>
            </div>
        </footer>
    </>)
};
