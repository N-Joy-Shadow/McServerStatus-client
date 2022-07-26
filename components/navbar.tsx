import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../styles/mc/Button.module.css";
import Bstyles from "../styles/mc/Background.module.css";
import MCButton from "./MCStyled/MCButton";

export default function navbar() {
  return (
    <div className={Bstyles.McBackground}>
      <nav className={styles.McBtnContainer} style={{ float: "right" }}>
        <Link href="login">
          <div style={{ width: "360px" }}>
            <MCButton>Login</MCButton>
          </div>
        </Link>
      </nav>
    </div>
  );
}
