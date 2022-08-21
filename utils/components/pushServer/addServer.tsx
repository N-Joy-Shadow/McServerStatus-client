import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import https from "https";
import Bstyles from "../../../styles/mc/Background.module.css";
import MCTextField from "../MCStyled/mcTextField";
import MCButton from "../MCStyled/mcButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { Responseinfo } from "../../../API/ServerInfo";

export default function AddServer() {
  const [server, Setserver] = useState<string>("");
  const [Res, SetRes] = useState<Responseinfo>();
  function HandleOnChange(x: any) {
    Setserver(x.value);
  }
  async function PostServer() {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    await axios({
      url: "/v2/api/db",
      httpsAgent: httpsAgent,
      method: "POST",
      data: {
        ip: server,
      },
    }).then((x) => {
      SetRes(x.data.responseinfo);
    });
  }
  const router = useRouter();
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

          <div className="my-4">
            <MCButton>Add Server</MCButton>
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
