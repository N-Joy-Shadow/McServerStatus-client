import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "../styles/mc/Background.module.css";
import MCButton from "./MCStyled/mcButton";

export default function Footer() {
  return (
    <footer className={styles.McBgFooter}>
            <div className="w-[100%] flex justify-center items-center h-[100%]">

        <Link to="/server/add" className="table">
          <div className="h-10 w-72 md:w-96">
            <MCButton>서버 추가</MCButton>
          </div>
        </Link>
        </div>
    </footer>
  );
}
