import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import https from "https";
import Bstyles from "../styles/Mc/Background.module.css";
import MCTextField from "./MCStyled/MCTextField";
import MCButton from "./MCStyled/MCButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { Responseinfo, ServerInfo } from "../API/ServerInfo";

export default function AddServer() {
  const [server, Setserver] = useState<string>("");
  const [Res,SetRes] = useState<Responseinfo>()
  function HandleOnChange(x: any) {
    Setserver(x.value);
  }
  async function PostServer() {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    await axios({
      url: "https://localhost:7238/api/db",
      httpsAgent: httpsAgent,
      method: "POST",
      data: {
        ip: server,
      },
    })
    .then((x) =>{
            SetRes(x.data.responseinfo)
    });
  }
  const router = useRouter();
  return (
    <div
      className={Bstyles.McBackground}
      style={{ width: "100%", height: "100%" }}
    >
      <div style={{ width : "400px", height : "40px"}}> 
      <MCButton 
        onClick={async () => {
          await PostServer().then(() => {
            if(Res?.isSuccess){
              router.push("/")
            }

          });
        }}
      >
        Add Server
      </MCButton>
      </div>
        <div style={{width : "400px", height :"200px"}}>
      <MCTextField  onChange={(x) => HandleOnChange(x.target)}/>
      <Link href='/'>

        <MCButton>Back</MCButton>
      </Link>
      <MCButton onClick={() => {
      }}>Test Btn</MCButton>
<p>{Res?.message}</p>
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

