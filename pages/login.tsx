import { Button } from "@mui/material";
import Link from "next/link";
import Bstyles from "../styles/Mc/Background.module.css";
import MCButton from "../components/MCStyled/MCButton";
import McToast from "../components/MCStyled/McToast";
import { GetStaticProps } from "next";

export default function login() {
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
export const getServerSideProps: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
