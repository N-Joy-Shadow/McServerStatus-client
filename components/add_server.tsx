import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import https from "https";
import Bstyles from "../styles/Mc/Background.module.css";
import styles from '../styles/Mc/Button.module.css'

export default function AddServer() {
  const [server, Setserver] = useState<string>("");

  function HandleOnChange(x: any) {
    console.log(x.value);
    Setserver(x.value);
  }
  async function PostServer() {
    console.log(process.env.NODE_TLS_REJECT_UNAUTHORIZED);
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    await axios({
      url: "https://localhost:7238/api/db",
      httpsAgent: httpsAgent,
      method: "POST",
      data: {
        Ip: server,
        IsAll: false,
      },
    });
  }

  return (
    <div className={Bstyles.McBackground}>

      <Button
        onClick={async () => {
          await PostServer().then(() => {
            alert("완료");
          });
        }}
      >
        {" "}
        서버 추가
      </Button>
      <TextField onChange={(x) => HandleOnChange(x.target)} />
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
