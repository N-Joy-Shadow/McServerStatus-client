import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/mc/Background.module.css";
import MCButton from "../components/MCStyled/mcButton";

export default function navbar() {
  return (
    

    <nav className={styles.McBackground}>
      <div className="w-[100%] flex justify-between items-center h-[100%] ml-4">

      <Link href="/login">
        <div className="w-80 h-10">
          <MCButton>Login</MCButton>
        </div>
      </Link>
      </div>
    </nav>
    
  );
}
