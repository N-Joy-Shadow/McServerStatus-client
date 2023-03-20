import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "../styles/mc/Background.module.css";
import { McButton, McFooter } from "./MCStyled/mcStyle";

export default function Footer() {
  return (
    <McFooter className="flex justify-center items-center">
        <Link to="/server/add" className="table">
            <McButton className="h-10 w-72 md:w-96">서버 추가</McButton>
        </Link>
    </McFooter>
  );
}
