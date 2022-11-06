import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/mc/Background.module.css";
import MCButton from "../components/MCStyled/mcButton";

export default function navbar() {
  return (
    <nav className={styles.McBgNav}>
      <div className="w-[100%] flex justify-between items-center h-[100%] mx-4">
        <div className="flex space-x-4">

{/*       일단 제거
          <Link href="/login">
          <div className="w-20 h-10 md:w-60">
              <MCButton>Login</MCButton>
            </div>
          </Link> */}

          <Link href="/info">
            <div className="w-20 h-10 md:w-60">
              <MCButton> 공지</MCButton>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
