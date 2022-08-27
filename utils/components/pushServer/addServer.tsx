import { Button, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import https from "https";
import Bstyles from "../../../styles/mc/Background.module.css";
import MCTextField from "../MCStyled/mcTextField";
import MCButton from "../MCStyled/mcButton";
import Link from "next/link";
import { useRouter } from "next/router";
import TagSelect from "./tagSelect";
import MarkdownRender from "./markdown";
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";

export default function AddServer() {
  const [server, Setserver] = useState<string>("");

  const [connection, setConnection] = useState<HubConnection>();
  const [chat, setChat] = useState<string>();
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("/v2/hubs/update", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if(connection){

      connection
      .start()
      .then(() => {
        console.log("Connected!");
        connection.on("test_receive", (message) => {
          console.log(message);
          setChat(message);
        });
      })
      .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection]);

  async function send() {
    if (connection) {
      await connection.invoke("test_send", "나님", "ㅁㄴㅇㅁㄴ").then(() => {
        console.log("success");
      });
    }
  }

  function HandleOnChange(x: any) {
    Setserver(x.value);
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
          {/*  
          <TagSelect/>
          <MarkdownRender/>
 */}

          <div className="my-4">
            <MCButton>Add Server</MCButton>
          </div>

          <div>
            <Link href="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>

          <div className="flex flex-row h-auo">
            <Button onClick={send}>Send!</Button>
            <p>result : {chat}</p>
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
