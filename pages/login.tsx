import { Button } from "@mui/material";
import Link from "next/link";
import MCButton from "../utils/components/MCStyled/mcButton";
import { GetStaticProps, NextPage } from "next";

import Bstyles from "../styles/Mc/Background.module.css";

 const login : NextPage = ({}) => {
  return (
    <div className={Bstyles.McBackground} style={{ height: "100vh" }}>
      <p>회원가입 따윈 없다.</p>
      <p>only Admin</p>
      <div style={{ width: "300px" }}>
        <MCButton onClick={() => {}}>Login</MCButton>
      </div>
      <Link href="/">
        <div style={{ width: "300px" }}>
          <MCButton>Get out!</MCButton>
        </div>
      </Link>
    </div>
  );
}
export const getstatiacprops: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
export default login