import { Button } from "@mui/material";
import Link from "next/link";
import MCButton from "../utils/components/MCStyled/mcButton";
import { useSession, signIn, signOut } from "next-auth/react";
import { GetStaticProps, NextPage } from "next";

import Bstyles from "../styles/Mc/Background.module.css";
import { useEffect } from 'react';
const login: NextPage = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() =>{
    console.log(`[${process.env.NEXTAUTH_URL}]`)
  },[])

  return (
    <div className={Bstyles.McBackground} style={{ height: "100vh" }}>
      <p>회원가입 따윈 없다.</p>
      <p>only Admin</p>
      <div style={{ width: "300px" }}>
        <MCButton
          onClick={() => {
            signIn();
          }}
        >
          Login
        </MCButton>
      </div>
      <Link href="/">
        <div style={{ width: "300px" }}>
          <MCButton>Get out!</MCButton>
        </div>
      </Link>
    </div>
  );
};
export default login;
