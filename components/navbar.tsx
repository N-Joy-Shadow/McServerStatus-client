import { Button } from "@mui/material";
import {   Link } from "react-router-dom";
import styles from "../styles/mc/Background.module.css";

import { useOnlineStore } from "../zustand/onlineStore";

import MCButton from "../components/MCStyled/mcButton";
import McToggle from "./MCStyled/mcToggle";

export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOnline ,SetOnline} = useOnlineStore()




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
          <Link to="/info">
            <div className="w-20 h-10 md:w-60">
              <MCButton>정보</MCButton>
            </div>
          </Link>

        </div>
          <label className="flex flex-row">
            <p className="mr-4 text-center cursor-pointer select-none">온라인 스위치</p>
            <McToggle onClick={(e) => SetOnline(!isOnline)} defaultChecked={true}/>
          </label>
      </div>
    </nav>
  );
}
