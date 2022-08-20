import { Button } from "@mui/material";
import Link from "next/link";
import Bstyles from "../../styles/mc/Background.module.css";
import MCButton from "./MCStyled/mcButton";

export default function Footer() {
  return (
    <div className={Bstyles.McBackground}>
      <footer>
        <Link href="/add">
          <div className={Bstyles.marginAutoPadding} style={{ width :"400px"}}>
            <MCButton>서버 추가</MCButton>
          </div>
        </Link>
      </footer>
    </div>
  );
}
