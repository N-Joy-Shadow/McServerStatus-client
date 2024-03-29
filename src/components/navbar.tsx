import { memo } from "react";
import { Link } from "react-router-dom";

import { useOnlineStore } from "../zustand/onlineStore";

import { McButton, McNav } from "./MCStyled/mcStyle";
import McToggle from './MCStyled/mcToggle';

function Navbar() {
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

        <label className="flex flex-row">
            <p className="mr-4 text-center cursor-pointer select-none hidden md:block">온라인 스위치</p>
            <McToggle onClick={(e) => {}} defaultChecked={true}/>
          </label>
      </div>
    </McNav>
  );
}
export default memo(Navbar)
