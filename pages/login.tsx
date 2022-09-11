import { Button } from "@mui/material";
import Link from "next/link";
import MCButton from "../utils/components/MCStyled/mcButton";
import { GetStaticProps, NextPage } from "next";

import Bstyles from "../styles/Mc/Background.module.css";
import { useEffect } from 'react';
const login: NextPage = ({}) => {


  return (
    <div className={Bstyles.McBackground} style={{ height: "100vh" }}>
      <p>회원가입 따윈 없다.</p>
      <p>only Admin</p>
      <div style={{ width: "300px" }}>
        <MCButton
          onClick={() => {
            window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1015634399070539867&redirect_uri=http%3A%2F%2Flocalhost%3A12345%2Fauth%2Floading&response_type=code&scope=identify%20email"
          }}
        >
          Login
        </MCButton>
        <MCButton onClick={() => {}}>
          LogOut
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
