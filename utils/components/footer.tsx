import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/mc/Background.module.css";
import MCButton from "./MCStyled/mcButton";

export default function Footer() {
  return (
    <footer className={styles.McBackground}>
      <div className="w-[100%] flex justify-center items-center h-[100%]">
        <Link href="/server/add">
          <div className="fixed table w-96 h-10">
            <MCButton>서버 추가</MCButton>
          </div>
        </Link>
      </div>
    </footer>
  );
}
