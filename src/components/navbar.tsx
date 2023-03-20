import { Link } from "react-router-dom";
import styles from "../styles/mc/Background.module.css";

import { useOnlineStore } from "../zustand/onlineStore";

import { McButton, McNav } from "./MCStyled/mcStyle";

export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOnline, SetOnline } = useOnlineStore();

  return (
    <McNav>
      <p
        className="absolute m-auto text-center text-xl"
        style={{
          transform: "translate(-50%,-50%)",
          left: "50%",
          top: "50%",
        }}
      >
        <strong>서버 리스트</strong>
      </p>
      <div className="w-[100%] flex justify-between items-center h-[100%] mx-4">
        <Link to="/info">
          <McButton className="w-20 h-10 md:w-60">정보</McButton>
        </Link>
        <Link to="/login">
          <McButton className="w-20 h-10 md:w-60">로그인</McButton>
        </Link>
        {/*           <label className="flex flex-row">
            <p className="mr-4 text-center cursor-pointer select-none hidden md:block">온라인 스위치</p>
            <McToggle onClick={(e) => SetOnline(!isOnline)} defaultChecked={true}/>
          </label> */}
      </div>
    </McNav>
  );
}
