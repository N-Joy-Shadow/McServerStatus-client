import { Button, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Bstyles from "../../../styles/mc/Background.module.css";
import MCTextField from "../MCStyled/mcTextField";
import MCButton from "../MCStyled/mcButton";
import Link from "next/link";
import { useRouter } from "next/router";
import TagSelect from "./tagSelect";
import MarkdownRender from "./markdown";
import { InsertServer } from "../fetch/insertServer";


export default function AddServer() {
  const [server, Setserver] = useState<string>("");


  function HandleOnChange(x: any) {
    Setserver(x.value);
  }

  
  return (
    <div
      className={Bstyles.McBackground}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="flex flex-col items-center align-middle top-80 relative">
        <div className="w-[28rem] ">
          <p className="text-center">ADD SERVER</p>
          <div className="my-4">
            <MCTextField onChange={(x) => HandleOnChange(x.target)} />
          </div>
          
          <TagSelect/>
          <MarkdownRender/>

          <div className="my-4">
            <MCButton onClick={async () =>await InsertServer(server).then((x) => alert("Done!"))}>Add Server</MCButton>
          </div>

          <div>
            <Link href="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// curl
// --verbose
// --request OPTIONS
// 'http://localhost:5238/api/db'
// --header 'Origin: http://localhost:3002'
// --header 'Access-Control-Request-Headers: Origin, Accept, Content-Type'
// --header 'Access-Control-Request-Method: POST'
