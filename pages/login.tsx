import { Button } from "@mui/material";
import Link from "next/link";
import MCButton from "../utils/components/MCStyled/mcButton";
import { GetStaticProps, NextPage } from "next";

import Bstyles from "../styles/Mc/Background.module.css";
import { useEffect } from "react";
import MCstyledLayout from "../utils/layouts/mcStyleLayout";
const login: NextPage = ({}) => {
  const DISCORD_URL = "https://discord.com/api/oauth2/authorize?client_id=1015634399070539867&redirect_uri=http%3A%2F%2Flocalhost%3A12345%2Fauth%2Floading&response_type=code&scope=identify%20email"
  const handleOnLogin = () =>{
    window.location.href =  DISCORD_URL
  }


  return (
    <MCstyledLayout>
      <div className="flex flex-col items-center gap-2">

        <h1 className="mt-8 text-2xl">로그인</h1>
        <p>only Admin</p>
        <div className="w-80">
          <MCButton onClick={handleOnLogin}>
            Login with Discord
          </MCButton>
        </div>

        <Link href="/">
          <div className="w-80">
            <MCButton>Back</MCButton>
          </div>
        </Link>
      </div>
    </MCstyledLayout>
  );
};
export default login;
