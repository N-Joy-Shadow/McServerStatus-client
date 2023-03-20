import { memo } from "react";
import { Link } from "react-router-dom";
import { McButton, McFooter } from "./MCStyled/mcStyle";

function Footer() {
  return (
    <McFooter className="flex justify-center items-center">
        <Link to="/server/add" className="table">
            <McButton className="h-10 w-72 md:w-96">서버 추가</McButton>
        </Link>
    </McFooter>
  );
}

export default memo(Footer)
