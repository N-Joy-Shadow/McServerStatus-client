import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/mc/Button.module.css";
import Bstyles from "../../styles/mc/Background.module.css";
import MCButton from "../components/MCStyled/mcButton";

export default function navbar() {
  return (
    <div className={Bstyles.McBackground}>
      <p className={Bstyles.multiPlayerMarginAuto} style={{fontSize:"23px", paddingTop: "20px"}}>멀티플레이</p>
      <nav className={styles.McBtnContainer}>
        <Link href="login">
          <div className={styles.McLoginBtn} style={{ width: "300px", marginTop: "-40px", marginLeft: "10px"}}>
            <MCButton>Login</MCButton>
          </div>
        </Link>
      </nav>
    </div>
  );
}
