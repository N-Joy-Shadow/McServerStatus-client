import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/mc/Background.module.css";
import MCButton from "../components/MCStyled/mcButton";

export default function navbar() {
  return (
    <nav className={styles.McBackground}>
      <div className="w-[100%] flex justify-between items-center h-[100%] mx-4">
        <div className="flex space-x-4">

          <Link href="/login">
            <div className="w-60 h-10">
              <MCButton>Login</MCButton>
            </div>
          </Link>

          <Link href="/info">
            <div className="w-60 h-10">
              <MCButton> 공지</MCButton>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
